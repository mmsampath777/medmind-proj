const isLoggedIn = localStorage.getItem("isLoggedIn");

// Update UI based on login status
if (isLoggedIn) {
  // Hide login and signup buttons, show user icon
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("signupBtn").style.display = "none";
  document.getElementById("userIcon").style.display = "block";
} else {
  // Ensure login and signup buttons are visible if not logged in
  document.getElementById("loginBtn").style.display = "block";
  document.getElementById("signupBtn").style.display = "block";
  document.getElementById("userIcon").style.display = "none";
}