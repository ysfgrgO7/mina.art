document.addEventListener("DOMContentLoaded", function () {
  // Define the specific images to show
  const imagesToShow = [5, 19, 20, 32, 34, 36];
  const splideList = document.querySelector(".splide__list");

  // Dynamically create slide elements for the specified images
  imagesToShow.forEach((imageNumber) => {
    const slide = document.createElement("li");
    slide.className = "splide__slide";
    const img = document.createElement("img");
    img.src = `./img/${imageNumber}.jpeg`;
    img.alt = `Art piece ${imageNumber}`;
    slide.appendChild(img);
    splideList.appendChild(slide);
  });

  // Initialize Splide
  new Splide(".splide", {
    type: "loop",
    focus: "center",
    perPage: 3,
    autoWidth: true,
    autoHeight: true,
    pagination: false,
    arrows: true,
  }).mount();

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobileMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
