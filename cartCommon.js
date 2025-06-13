// cart-common.js

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.addToCartButton')) {
            addProductToCart(e);
        }
    });
});

function addProductToCart(event) {
    try {
        const card = event.target.closest('.shop-item');
        if (!card) return;

        const title = card.querySelector('.card-title')?.textContent?.trim() || 'Unknown';
        const price = card.querySelector('.productPrice')?.textContent?.trim() || 'Rs.0';
        const image = card.querySelector('.card-img-top')?.src || '';

        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

        const isExisting = cartItems.some(item => item.title === title);
        if (isExisting) {
            alert(`"${title}" is already in your cart.`);
            return;
        }

        cartItems.push({ title, price, image, quantity: 1 });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
       window.syncCartWithFirebaseSafe?.();



        alert(`"${title}" has been added to your cart!`);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Something went wrong while adding the product. Please try again.');
    }
}
