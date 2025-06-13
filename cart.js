// cart-page.js
console.log('Cart page script loaded');
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('cartSection') && document.querySelector('.cart-total-price')) {
        console.log('DOM loaded - initializing cart');
        initCart();
    } else {
        console.log('Cart not initialized — cart elements not found on this page.');
    }
});

function initCart() {
    const cartSection = document.getElementById('cartSection');
    const totalElement = document.querySelector('.cart-total-price');

    if (!cartSection || !totalElement) {
        console.error('Missing required elements! Check your HTML.');
        return;
    }

    cartSection.innerHTML = '';
    loadCart();
    setupHandlers();
    console.log('Cart initialized successfully');
}

function loadCart() {
    try {
        const saved = localStorage.getItem('cartItems');
        if (!saved) return;

        const items = JSON.parse(saved);
        items.forEach(item => {
            addItemToCart(item.title, item.price, item.image, item.quantity);
        });

        updateTotal();
        syncCartWithFirebase();
    } catch (e) {
        console.error('Error loading cart:', e);
    }
}

function setupHandlers() {
    document.getElementById('cartSection').addEventListener('click', function (e) {
        if (e.target.classList.contains('qtyAdditionBtn')) {
            changeQuantity(e.target, +1);
        } else if (e.target.classList.contains('qtySubstractionBtn')) {
            changeQuantity(e.target, -1);
        } else if (e.target.classList.contains('cart-item-rem-btn')) {
            removeCartItem(e.target);
        }
    });

    document.querySelector('.clearCart')?.addEventListener('click', clearCart);
}

function addItemToCart(title, price, image, quantity = 1) {
    const html = `
    <div class="cart-item">
        <div class="item-info">
            <i class="bi bi-trash cart-item-rem-btn"></i>
            <div class="item-image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="item-details">
                <div class="item-name">${title}</div>
            </div>
        </div>
        <div class="item-price">${price}</div>
        <div class="item-quantity">
            <button class="quantity-btn qtySubstractionBtn">-</button>
            <input type="number" class="quantity-input" value="${quantity}" min="1">
            <button class="quantity-btn qtyAdditionBtn">+</button>
        </div>
        <div class="item-total">${price}</div>
    </div>`;
    document.getElementById('cartSection').insertAdjacentHTML('beforeend', html);
}

function changeQuantity(button, change) {
    const input = button.parentElement.querySelector('.quantity-input');
    const newValue = parseInt(input.value) + change;

    if (newValue < 1) {
        button.closest('.cart-item').remove();
    } else {
        input.value = newValue;
    }

    updateTotal();
    saveCart();
    syncCartWithFirebase();
}

function removeCartItem(button) {
    button.closest('.cart-item').remove();
    updateTotal();
    saveCart();
    syncCartWithFirebase();
}
function updateTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    const totalElement = document.querySelector('.cart-total-price');
    const emptyCartMsg = document.getElementById('emptyCartMessage');

    cartItems.forEach(item => {
        const price = parseFloat(
            item.querySelector('.item-price').textContent
                .replace('Rs.', '')
                .replace(/,/g, '')
        ) || 0;

        const quantity = parseInt(item.querySelector('.quantity-input').value) || 0;
        const itemTotal = price * quantity;

        item.querySelector('.item-total').textContent =
            'Rs.' + itemTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        total += itemTotal;
    });

    totalElement.textContent =
        'Rs.' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Show or hide the empty cart message
    if (cartItems.length === 0) {
        emptyCartMsg.classList.remove('d-none');
    } else {
        emptyCartMsg.classList.add('d-none');
    }
}


function saveCart() {
    const items = [...document.querySelectorAll('.cart-item')].map(item => ({
        title: item.querySelector('.item-name').textContent,
        price: item.querySelector('.item-price').textContent,
        image: item.querySelector('.item-image img').src,
        quantity: parseInt(item.querySelector('.quantity-input').value) || 1
    }));

    localStorage.setItem('cartItems', JSON.stringify(items));
    syncCartWithFirebase();
}

function clearCart() {
    if (confirm('Clear all items from cart?')) {
        document.getElementById('cartSection').innerHTML = '';
        localStorage.removeItem('cartItems');
        updateTotal();
        syncCartWithFirebase();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            if (cartItems.length === 0) {
                alert('Your cart is empty! Please add items before checking out.');
                return;
            }
            // Proceed with checkout logic here
            alert('Proceeding to checkout...');
            window.location.href = "checkout.html";
        });
    } else {
        console.warn('Checkout button not found!');
    }

})

// sync cart with Firebase
// This function would typically be called when the user is logged in
window.syncCartWithFirebase = function () {
    console.log("snc cart with fire base function called")
    if (!window.auth) {
        console.warn("Firebase auth is not initialized yet.");
        return;
    }

    const user = window.auth.currentUser;
    if (!user) {
        console.warn('No user is currently logged in. Cart sync skipped.');
        return;
    }

    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const userCartRef = window.database.ref(`carts/${user.uid}`);

    if (cartItems.length === 0) {
        // Remove from Firebase if cart is empty
        userCartRef.remove()
            .then(() => {
                console.log('Cart is empty. Firebase cart data removed.');
            })
            .catch((error) => {
                console.error('Error removing cart from Firebase:', error);
            });
        return;
    }

    userCartRef.set(cartItems)
        .then(() => {
            console.log('Cart synced with Firebase successfully.');
        })
        .catch((error) => {
            console.error('Error syncing cart with Firebase:', error);
        });
}
window.syncCartWithFirebaseSafe = function () {
    if (!window.auth) {
        console.warn("Firebase auth not ready");
        return;
    }

    window.auth.onAuthStateChanged((user) => {
        if (user) {
            syncCartWithFirebase(); // your actual function
        } else {
            console.warn("No user — skipping cart sync.");
        }
    });
};
