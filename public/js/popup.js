// Show the popup when the page loads
window.onload = function () {
    // Show the popup overlay and apply the animation
    const popupOverlay = document.getElementById("welcomePopup");
    popupOverlay.style.display = "flex"; // Set to flex to make it visible
    setTimeout(function() {
        popupOverlay.classList.add('show'); // Trigger dropdown animation
    }, 10); // Small timeout to allow the element to render before adding the class
};

// Close the popup
function closePopup() {
    const popupOverlay = document.getElementById("welcomePopup");
    popupOverlay.classList.remove('show'); // Reverse the dropdown animation

    setTimeout(function() {
        popupOverlay.style.display = "none"; // Hide the popup after animation is complete
    }, 500); // Timeout duration matches the animation time
}

// Redirect to Sign Up page
function redirectToSignup() {
    // Change the URL to your signup page
    window.location.href = "login.html";
}
