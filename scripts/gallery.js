document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Fetch the image count from img.json located one directory up
    const response = await fetch("../img.json");
    const imageCount = await response.json(); // Directly returns the number

    const imageDir = "../img/";
    const gallery = document.getElementById("gallery");

    // Generate the gallery items based on the image count from the JSON file
    for (let i = 1; i <= imageCount; i++) {
      const img = document.createElement("img");
      img.src = `${imageDir}${i}.jpeg`;
      img.alt = `Image ${i}`;
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.appendChild(img);
      gallery.appendChild(galleryItem);
    }

    // Initialize medium-zoom with transparent background
    mediumZoom(".gallery-item img", {
      margin: 24,
      background: "rgba(0, 0, 0, 0.5)",
    });

  // Error Handling 
  } catch (error) {
    console.error("Error fetching image count:", error);
  }
});
