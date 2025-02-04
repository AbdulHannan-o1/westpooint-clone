function loadComponents(components) {
    components.forEach(({ selector, file }) => {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                return response.text();
            })
            .then(data => document.querySelector(selector).innerHTML = data)
            .catch(error => console.error(`Error loading ${file}:`, error));
    });
}

// Load header, body, and footer
loadComponents([
    { selector: "#header-placeholder", file: "header.html" },
    { selector: "#mainBody-placeholder", file: "body.html" },
    { selector: "#footer-placeholder", file: "footer.html" }
]);

   
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
