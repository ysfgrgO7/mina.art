// public/script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/images")
    .then((response) => response.json())
    .then((images) => {
      const createGalleryItem = (item) => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";
        galleryItem.innerHTML = `
          <a href="img/${item}" data-lightbox="gallery" data-title="${item}">
            <img src="img/${item}" alt="${item}" loading="lazy" />
          </a>
        `;
        return galleryItem;
      };

      const galleryContainer = document.getElementById("gallery");
      images.forEach((image) => {
        galleryContainer.appendChild(createGalleryItem(image));
      });
    })
    .catch((error) => console.error("Error fetching image list:", error));
});
