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
  document.getElementById('min-price').value = minInit;
  document.getElementById('max-price').value = maxInit;
  document.getElementById('min-slider').value = minInit;
  document.getElementById('max-slider').value = maxInit;
  updateSlider();