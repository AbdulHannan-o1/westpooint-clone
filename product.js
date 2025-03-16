const minInit = 0;
const maxInit = 37080;
//function to update the slider and input 
function updateSlider() {
    const minPrice = parseInt(document.getElementById("min-price").value, 10);
    const maxPrice = parseInt(document.getElementById("max-price").value, 10);
    // slider range update 
    document.getElementById('min-slider').value = minPrice;
    document.getElementById('max-slider').value = maxPrice;
    // price slider update
    const priseSlider = document.getElementById('price-slider');
    const minPersent = (minPrice / 37080) * 100;
    const maxPersent = (maxPrice / 37080) * 100;
    priceSlider.style.left = '${minPersent}%';
    priceSlider.style.right = '${100 - maxPersent}%';
}
// Function to sync inputs when sliders are moved
function syncInputs() {
    const minSlider = parseInt(document.getElementById('min-slider').value, 10);
    const maxSlider = parseInt(document.getElementById('max-slider').value, 10);
  
    // Update the input fields
    document.getElementById('min-price').value = minSlider;
    document.getElementById('max-price').value = maxSlider;
  
    // Update the visual slider (price-slider)
    const priceSlider = document.getElementById('price-slider');
    const minPercent = (minSlider / 37080) * 100;
    const maxPercent = (maxSlider / 37080) * 100;
    priceSlider.style.left = `${minPercent}%`;
    priceSlider.style.right = `${100 - maxPercent}%`;
  }
  
  // Initialize the slider and inputs
  // document.getElementById('min-price').value = minInit;
  // document.getElementById('max-price').value = maxInit;
  // document.getElementById('min-slider').value = minInit;
  // document.getElementById('max-slider').value = maxInit;
  // updateSlider();
//   js for dynamic cards 
const products = [
    // from 1 to 12 health and beauty products
    {
      id: 1,
      title: "WF-6808",
      image: "straightener 01.avif",
      description: "Hair Straightener WF-680",
      price: "Rs.8,460.00"
    },
    {
      id: 2,
      title: "WF-6811",
      image: "straightener 02.jpg",
      description: "Hair Curler & Straightener",
      price: "Rs.6,930.00"
    },
    {
      id: 3,
      title: "WF-6201",
      image: "DRYER.webp",
      description: "Hair Dryer WF-6201",
      price: "Rs.4,941.00"
    },
    {
      id: 4,
      title: "WF-6807",
      image: "stra.jpg",
      description: "Hair Straightener WF-6807",
      price: "Rs.7,920.00"
    },
    {
      id: 5,
      title: "WF-6203",
      image: "hairDryer 01.jpg",
      description: "Hair Dryer WF-6203",
      price: "Rs.6,030.00"
    },
    {
      id: 6,
      title: "WF-6809",
      image: "stra 06.avif",
      description: "Hair Straightener WF-6809",
      price: "Rs.8,910.00"
    },
    {
      id: 7,
      title: "WF-3870",
      image: "steamer.avif",
      description: "Foot Massager WF-3870",
      price: "Rs.17,190.00"
    },
    {
      id: 8,
      title: "WF-6810",
      image: "brush.avif",
      description: "Hair Straightening Brush WF-6810",
      price: "Rs.12,420.00"
    },
    {
      id: 9,
      title: "WF-614",
      image: "sta.jpg",
      description: "Facial Steamer WF-614",
      price: "Rs.4,680.00"
    },
    {
      id: 10,
      title: "WF-6713",
      image: "trimmer.avif",
      description: "Hair Clipper WF-6713",
      price: "Rs.5,130.00"
    },
    {
      id: 11,
      title: "WF-1201",
      image: "room humidifier.jpg",
      description: "Ultrasonic Room Humidifier WF-1201",
      price: "Rs.13,860.00"
    },
    {
      id: 12,
      title: "WF-7008",
      image: "weight scale.avif",
      description: "Bath Scale WF-7008",
      price: "Rs.5,760.00"
    },
    // from 13 to 24 best selling products
      {
    id: 13,
    title: "WF-9201",
    image: "better 1.jpg",
    description: "Hand Mixer",
    price: "Rs.8,600.00"
  },
  {
    id: 14,
    title: "WF-7806",
    image: "food prosesor.jpg",
    description: "Professional Kitchen Chef WF-7806",
    price: "Rs.23,220.00"
  },
  {
    id: 15,
    title: "WF-9501",
    image: "brtter 2.jpg",
    description: "Hand Mixer",
    price: "Rs.7,740.00"
  },
  {
    id: 16,
    title: "WF-314",
    image: "blender.jpg",
    description: "Blender and Grinder 3in1",
    price: "Rs.9,720.00"
  },
  {
    id: 17,
    title: "WF-506",
    image: "chopper.jpg",
    description: "Kitchen Robot WF-506",
    price: "Rs.18,270.00"
  },
  {
    id: 18,
    title: "WF-555",
    image: "citrus.jpg",
    description: "Citrus Juicer WF-555",
    price: "Rs.12,240.00"
  },
  {
    id: 19,
    title: "WF-4616",
    image: "WF4616-01_220x.avif",
    description: "Stand Mixer WF-4616",
    price: "Rs.32,580.00"
  },
  {
    id: 20,
    title: "WF-1201",
    image: "room humidifier.jpg",
    description: "Ultrasonic Room Humidifier WF-1201",
    price: "Rs.13,860.00"
  },
  {
    id: 21,
    title: "WF-2589",
    image: "toaster.jpg",
    description: "Pop-Up Toaster WF-2589",
    price: "Rs.9,180.00"
  },
  {
    id: 22,
    title: "WF-6293",
    image: "sandwhich maker.jpg",
    description: "Sandwich Toaster 3 in 1",
    price: "Rs.11,985.00"
  },
  {
    id: 23,
    title: "WF-6811",
    image: "CURLER.avif",
    description: "Hair Curler & Straightener...",
    price: "Rs.6,930.00"
  },
  {
    id: 24,
    title: "WF-6201",
    image: "DRYER.webp",
    description: "Hair Dryer WF-6201",
    price: "Rs.4,941.00"
  },
  // from 25 to 36 house hold appliences products 
  {
    id: 25,
    title: "WF-6808",
    image: "straightener 01.avif",
    description: "Hair Straightener WF-680",
    price: "Rs.8,460.00"
  },
  {
    id: 26,
    title: "WF-6811",
    image: "straightener 02.jpg",
    description: "Hair Curler & Straightener",
    price: "Rs.6,930.00"
  },
  {
    id: 27,
    title: "WF-6201",
    image: "DRYER.webp",
    description: "Hair Dryer WF-6201",
    price: "Rs.4,941.00"
  },
  {
    id: 28,
    title: "WF-6807",
    image: "stra.jpg",
    description: "Hair Straightener WF-6807",
    price: "Rs.7,920.00"
  },
  {
    id: 29,
    title: "WF-6203",
    image: "hairDryer 01.jpg",
    description: "Hair Dryer WF-6203",
    price: "Rs.6,030.00"
  },
  {
    id: 30,
    title: "WF-6809",
    image: "stra 06.avif",
    description: "Hair Straightener WF-6809",
    price: "Rs.8,910.00"
  },
  {
    id: 31,
    title: "WF-3870",
    image: "steamer.avif",
    description: "Foot Massager WF-3870",
    price: "Rs.17,190.00"
  },
  {
    id: 32,
    title: "WF-6810",
    image: "brush.avif",
    description: "Hair Straightening Brush WF-6810",
    price: "Rs.12,420.00"
  },
  {
    id: 33,
    title: "WF-614",
    image: "sta.jpg",
    description: "Facial Steamer WF-614",
    price: "Rs.4,680.00"
  },
  {
    id: 34,
    title: "WF-6713",
    image: "trimmer.avif",
    description: "Hair Clipper WF-6713",
    price: "Rs.5,130.00"
  },
  {
    id: 35,
    title: "WF-1201",
    image: "room humidifier.jpg",
    description: "Ultrasonic Room Humidifier WF-1201",
    price: "Rs.13,860.00"
  },
  {
    id: 36,
    title: "WF-7008",
    image: "weight scale.avif",
    description: "Bath Scale WF-7008",
    price: "Rs.5,760.00"
  },
  // from 37 to 49 kitchen appliences products
  {
    id: 37,
    title: "Hand Mixer",
    image: "KAP-1.AVIF",
    description: "Professional Hand Mixer Pro",
    price: "Rs.8,460.00"
  },
  {
    id: 38,
    title: "Food Processor",
    image: "KAP-2.AVIF",
    description: "Multi-Function Food Processor",
    price: "Rs.6,930.00"
  },
  {
    id: 39,
    title: "Electric Kettle",
    image: "KAP-3.AVIF",
    description: "Stainless Steel Electric Kettle",
    price: "Rs.4,941.00"
  },
  {
    id: 40,
    title: "Coffee Maker",
    image: "KAP-4.AVIF",
    description: "Automatic Coffee Maker",
    price: "Rs.7,920.00"
  },
  {
    id: 41,
    title: "Air Fryer",
    image: "KAP-5.AVIF",
    description: "Digital Air Fryer XL",
    price: "Rs.16,030.00"
  },
  {
    id: 42,
    title: "Rice Cooker",
    image: "KAP-6.AVIF",
    description: "Multi-Function Rice Cooker",
    price: "Rs.8,910.00"
  },
  {
    id: 43,
    title: "Blender",
    image: "KAP-7.AVIF",
    description: "High-Speed Power Blender",
    price: "Rs.17,190.00"
  },
  {
    id: 44,
    title: "Toaster Oven",
    image: "KAP-8.AVIF",
    description: "Digital Toaster Oven",
    price: "Rs.12,420.00"
  },
  {
    id: 45,
    title: "Slow Cooker",
    image: "KAP-9.AVIF",
    description: "Programmable Slow Cooker",
    price: "Rs.14,680.00"
  },
  {
    id: 46,
    title: "Food Steamer",
    image: "KAP-10.AVIF",
    description: "Digital Food Steamer",
    price: "Rs.15,130.00"
  },
  {
    id: 47,
    title: "Waffle Maker",
    image: "KAP-11.AVIF",
    description: "Belgian Waffle Maker",
    price: "Rs.13,860.00"
  },
  {
    id: 48,
    title: "Juicer",
    image: "KAP-12.AVIF",
    description: "Cold Press Juicer",
    price: "Rs.15,760.00"
  }
];
// function to display products
const healthAndBeautyProducts = products.filter(product=> product.id >= 1 && product.id <= 12);
const bestSellingProducts = products.filter(product=> product.id >= 13 && product.id <= 24);
const householdProducts = products.filter(product=> product.id >= 25 && product.id <= 36);
const kitchenAppliancesProducts = products.filter(product=> product.id >= 37 && product.id <= 48);

function initializeProducts() {
    const healthContainer = document.getElementById('healthAndBeautyProducts');
    const bestContainer = document.getElementById('bestSellingProducts');
    const householdContainer = document.getElementById('householdProducts'); 
    const kitchenContainer = document.getElementById('kitchenAppliancesProducts');
    
    if (healthContainer) {
        console.log('Rendering health and beauty products');
        let healthCards = '';
        healthAndBeautyProducts.forEach(c => {
            healthCards += generateProductCard(c);
        });
        healthContainer.innerHTML = healthCards;
    }

    if (bestContainer) {
        console.log('Rendering best selling products');
        let bestCards = '';
        bestSellingProducts.forEach(c => {
            bestCards += generateProductCard(c);
        });
        bestContainer.innerHTML = bestCards;
    }

    if (householdContainer) {
      console.log('Rendering household products');
      let householdCards = '';
      householdProducts.forEach(c => {
          householdCards += generateProductCard(c);
      });
      householdContainer.innerHTML = householdCards;
  }
  if (kitchenContainer) {
    console.log('Rendering kitchen products');
    let kitchenCards = '';
    kitchenAppliancesProducts.forEach(c => {
        kitchenCards += generateProductCard(c);
    });
    kitchenContainer.innerHTML = kitchenCards;
}
}

// Helper function to generate product card HTML
function generateProductCard(product) {
    // return `
    //     <div class="col">
    //         <div class="card">
    //             <span class="sale-badge">Sale 10%</span>
    //             <img src="images/${product.image}" class="card-img-top cardImgTop img-fluid" alt="${product.description}">
    //             <div class="card-content">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${product.title}</h5>
    //                     <p class="card-text card-text02">${product.description}</p>
    //                     <p class="card-text">${product.price}</p>
    //                 </div>
    //                 <div class="buttonDiv">
    //                     <div class="addToCartButton mx-auto"><i class="bi bi-cart addToCartIcon"></i>ADD TO CART</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `;
    if (window.innerWidth <= 545) {
      console.log("Small screen (mobile or tablet)");
      return `
          <div class="col-6 col-sm-4 col-md-3">
    <div class="card h-100">
        <span class="sale-badge">Sale 10%</span>
        <img src="images/${product.image}" class="card-img-top" alt="...">
        <div class="card-content cardContentForMobile">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text card-text02">${product.description}</p>
                <p class="card-text ">Rs. ${product.price}</p>
            </div>
            <div class="buttonDiv">
                <div class="addToCartButton mx-auto">
                    <i class="bi bi-cart addToCartIcon"></i> ADD TO CART
                </div>
            </div>
        </div>
    </div>
</div>
`;
    } else if (window.innerWidth > 575 && window.innerWidth <= 1024) {
      console.log("Medium screen (tablet or small desktop)");
      return `
        <div class="col">
            <div class="card">
                <span class="sale-badge">Sale 10%</span>
                <img src="images/${product.image}" class="card-img-top cardImgTop img-fluid" alt="${product.description}">
                <div class="card-content">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text card-text02">${product.description}</p>
                        <p class="card-text">${product.price}</p>
                    </div>
                    <div class="buttonDiv">
                        <div class="addToCartButton mx-auto"><i class="bi bi-cart addToCartIcon"></i>ADD TO CART</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    } else {
      console.log("Large screen (desktop)");
          return `
        <div class="col">
            <div class="card">
                <span class="sale-badge">Sale 10%</span>
                <img src="images/${product.image}" class="card-img-top cardImgTop img-fluid" alt="${product.description}">
                <div class="card-content">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text card-text02">${product.description}</p>
                        <p class="card-text">${product.price}</p>
                    </div>
                    <div class="buttonDiv">
                        <div class="addToCartButton mx-auto"><i class="bi bi-cart addToCartIcon"></i>ADD TO CART</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }


}

// Add resize event listener with shorter debounce time
let resizeTimeout;
window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(() => {
        console.log('Window resized - reinitializing products');
        initializeProducts();
    });
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});

console.log(document.body.innerHTML);
