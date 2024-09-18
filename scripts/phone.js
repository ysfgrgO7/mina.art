document.addEventListener("DOMContentLoaded", function () {
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
