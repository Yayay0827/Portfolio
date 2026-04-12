// Get the overlay (the white transparent background)
const overlay = document.getElementById("overlay");

// Get the big image inside the overlay
const overlayImg = document.getElementById("overlayImg");

// Get ALL images inside the gallery
const images = document.querySelectorAll(".galleryGrid img");


// For EACH image in the gallery...
images.forEach(img => {

  // When this image is clicked...
  img.addEventListener("click", () => {

    // 1. Turn ON the overlay (make it visible)
    overlay.classList.add("active");

    // 2. Copy the clicked image into the big overlay image
    overlayImg.src = img.src;

    // 3. Stop the page from scrolling in the background
    document.body.style.overflow = "hidden";
  });

});


// When you click anywhere on the overlay...
overlay.addEventListener("click", () => {

  // Turn OFF the overlay (hide it)
  overlay.classList.remove("active");

  // Allow scrolling again
  document.body.style.overflow = "";
});
