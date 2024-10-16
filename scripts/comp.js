document.addEventListener("DOMContentLoaded", function () {
  // NavBar
  fetch("../components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // MobileMenu
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobileMenu");

      // Toggle menu and hamburger icon
      hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        hamburger.classList.toggle("active"); // Add a class to change the icon to 'X'
      });

      // Set the active class on the current page's link for desktop
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll(".headerLinks nav ul li a");

      navLinks.forEach((link) => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (
          linkPath === currentPath ||
          (currentPath.endsWith("/") && linkPath === currentPath + "index.html")
        ) {
          link.classList.add("active");
        }
      });

      // Set the active class on the current page's link for mobile
      const mobileNavLinks = document.querySelectorAll(
        ".mobileMenu nav ul li a",
      );

      mobileNavLinks.forEach((link) => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (
          linkPath === currentPath ||
          (currentPath.endsWith("/") && linkPath === currentPath + "index.html")
        ) {
          link.classList.add("active");
        }
      });
    });

  // Footer
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;

      // Add the copy to clipboard functionality
      const phoneLink = document.getElementById("phone-link");
      phoneLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action

        const phoneNumber = phoneLink.getAttribute("data-phone");
        navigator.clipboard.writeText(phoneNumber).then(
          function () {
            alert("Phone number copied to clipboard: " + phoneNumber);
          },
          function (err) {
            console.error("Could not copy text: ", err);
          },
        );
      });
    });
});
