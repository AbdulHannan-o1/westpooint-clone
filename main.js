// js for alert message
// Replace all native alerts
window.originalAlert = window.alert;
window.alert = (message, duration = 3000) => {
    const container = document.getElementById('alert-container') || createAlertContainer();
    const alert = document.createElement('div');
    alert.className = 'custom-alert';
    alert.textContent = message;
    container.appendChild(alert);
    
    // Auto-dismiss
    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => alert.remove(), 3000); // Match transition duration
    }, duration);
};

function createAlertContainer() {
    const container = document.createElement('div');
    container.id = 'alert-container';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '1000';
    document.body.appendChild(container);
    return container;
}


function loadComponents(components) {
    return Promise.all(components.map(({ selector, file }) => {
        const element = document.querySelector(selector);
        if (!element) {
            console.log(`Element ${selector} not found, skipping...`);
            return Promise.resolve();
        }
        
        return fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    })).then(() => {
        // Initialize products after components are loaded
        if (typeof initializeProducts === 'function') {
            initializeProducts();
        }
    });
}

// Load components based on current page
const currentPath = window.location.pathname;
if (currentPath.includes('healthAndBeauty.html')) {
    loadComponents([
        { selector: "#header-placeholder", file: "header.html" },
        { selector: "#footer-placeholder", file: "footer.html" }
    ]);
} else {
    loadComponents([
        { selector: "#header-placeholder", file: "header.html" },
        { selector: "#footer-placeholder", file: "footer.html" }
    ]);
}

function searchItem(){
    document.getElementById("search-form").submit();
}

//js for manyal nav in banner through radio buttons 
document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('imageSlider'));

    document.getElementById('radio1').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(0); //goes to 1st banner
        }
    });

    document.getElementById('radio2').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(1); //goes to 2nd banner
        }
    });

    document.getElementById('radio3').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(2); //goes to 3rd banner
        }
    });

    document.getElementById('radio4').addEventListener('change' , function() {
        if(this.checked) {
            carousel.to(3); //goes to 4rth banner 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', function() {
            const currentItem = this.parentElement;

            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach((item) => {
                if(item !== currentItem) {
                    item.classList.remove('open');
                }
            });
            //Toggle the current item
            currentItem.classList.toggle('active');
        });
    }); 
});
// function for price selction
function updatePrice () {
    var priceRange = document.getElementById('priceRange').value;
    document.getElementById('maxPrice').value = priceRange;
}
function toggleSection(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    if (section.classList.contains('d-none')) {
        section.classList.remove('d-none');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        section.classList.add('d-none');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}

function updateSlider() {
    const minInput = document.getElementById('min-price');
    const maxInput = document.getElementById('max-price');
    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);
    const slider = document.getElementById('price-slider');
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');

    if (minValue > maxValue) {
        minInput.value = maxValue;
    }

    minSlider.value = minValue;
    maxSlider.value = maxValue;

    slider.style.left = (minValue / minSlider.max) * 100 + '%';
    slider.style.right = 100 - (maxValue / maxSlider.max) * 100 + '%';
}

function syncInputs() {
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    const minInput = document.getElementById('min-price');
    const maxInput = document.getElementById('max-price');

    minInput.value = minSlider.value;
    maxInput.value = maxSlider.value;

    updateSlider();
}
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const offcanvas = document.getElementById('offcanvas');
    const applyButton = document.getElementById('applyButton');
    const gridButton = document.getElementById('gridButton');
    const listButton = document.getElementById('listButton');
    const productGrid = document.getElementById('productGrid');

    filterButton.addEventListener('click', () => {
        offcanvas.classList.add('show');
    });

    applyButton.addEventListener('click', () => {
        offcanvas.classList.remove('show');
    });

    document.addEventListener('click', (event) => {
        if (!offcanvas.contains(event.target) && !filterButton.contains(event.target)) {
            offcanvas.classList.remove('show');
        }
    });

    gridButton.addEventListener('click', () => {
        productGrid.classList.remove('grid-cols-1');
        productGrid.classList.add('grid-cols-2');
    });

    listButton.addEventListener('click', () => {
        productGrid.classList.remove('grid-cols-2');
        productGrid.classList.add('grid-cols-1');
    });
});
 document.getElementById('filterBtn').addEventListener('click', function() {
        document.getElementById('filterSidebar').classList.add('active');
    });
    document.getElementById('closeFilter').addEventListener('click', function() {
        document.getElementById('filterSidebar').classList.remove('active');
    });

// js for contact us form 
function hidePlaceholder(element) {
    element.setAttribute("data-placeholder", element.placeholder); // Store placeholder
    element.placeholder = ""; // Hide placeholder
}

function showPlaceholder(element) {
    if (element.value === "") {
        element.placeholder = element.getAttribute("data-placeholder"); // Restore if empty
    }
}
 // Initialize popovers
 document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
});

// js for password visibility toggle
function togglePasswordVisibility(passwordFieldId, eyeIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const eyeIcon = document.getElementById(eyeIconId);

    // Debugging: Check if elements are found
    // console.log("Password Field Element:", passwordField);
    // console.log("Eye Icon Element:", eyeIcon);

    if (passwordField && eyeIcon) {
        // console.log("Eye icon clicked!"); // Debugging

        // Toggle the type attribute
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;

        // Toggle the icon class
        const icon = eyeIcon.querySelector("i");
        icon.classList.toggle("bi-eye");
        icon.classList.toggle("bi-eye-slash");
    } else {
        console.error("One or more elements not found!");
    }
}

