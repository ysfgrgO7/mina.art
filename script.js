document.addEventListener("DOMContentLoaded", function () {
  const imageCount = 37;
  const imageDir = "./img/";
  const gallery = document.getElementById("gallery");

  for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `${imageDir}${i}.jpg`;
    img.alt = `Image ${i}`;

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.appendChild(img);

    gallery.appendChild(galleryItem);
  }

  // Initialize medium-zoom with transparent background
  mediumZoom(".gallery-item img", {
    margin: 24,
  });

  const phoneLink = document.getElementById("phone-link");
  phoneLink.addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = "+201096162068";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  });
});
