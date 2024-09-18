document.addEventListener("DOMContentLoaded", function () {
    // Footer
    fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;

    // Add the copy to clipboard functionality
    const phoneLink = document.getElementById('phone-link');
    phoneLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action

        const phoneNumber = phoneLink.getAttribute('data-phone');
        navigator.clipboard.writeText(phoneNumber).then(function() {
            alert("Phone number copied to clipboard: " + phoneNumber);
        }, function(err) {
            console.error("Could not copy text: ", err);
        });
    });
});
});
