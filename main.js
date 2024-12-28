//loading header file in main html 
function pageLoader(page) {
    fetch(page)
    .then(Response => {
        if(!Response.ok) {
            throw new Error('Network response was not ok');
        }
        return Response.text();
    })
    .then (data => {
        document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

}

pageLoader('header.html')

    //loading header ends 

    fetch('footer.html')
        .then(Response => {
            if(!Response.ok) {
                throw new Error ('Network responce was not ok');
            }
            return Response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error Loading header: ', error));

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