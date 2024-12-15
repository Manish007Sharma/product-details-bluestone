// alert js is here 
function alertAddedToCart() {
    alert('Product has been added to the cart sucessfully!');
}

// carousel script 
// Fetching carousel items from the provided API
async function fetchCarouselItems() {
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
    if (!response.ok) {
      throw new Error("OAuth error: The access token is invalid");
    }
    return await response.json();
  }
  
  // Populating the carousel from here
  async function populateCarousel() {
    const carouselArea = document.getElementById("carousel-area");
    const selectedImage = document.getElementById("selected-image");
  
    try {
      const items = await fetchCarouselItems();
      // default select image as first item
      selectedImage.src = items[0].download_url;

      items.forEach((item) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        carouselItem.innerHTML = `<img src="${item.download_url}" alt="${item.author}" />`;
        carouselItem.addEventListener("click", () => updateSelectedImage(item.download_url));
        carouselArea.appendChild(carouselItem);
      });
    } catch (error) {
      console.error("Error populating carousel item:", error);
    }
  }
  
  // Updating the selected image
  function updateSelectedImage(src) {
    const selectedImage = document.getElementById("selected-image");
    selectedImage.src = src;
  }
  
  populateCarousel();
  
  