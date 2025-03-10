// Basic front-end form validation and placeholder sign-up
document.getElementById("signup-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsChecked = document.getElementById("terms").checked;
  
    // Basic checks
    if (!termsChecked) {
      alert("Please accept the Terms & Conditions");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Placeholder success action
    alert(`Welcome, ${firstName}! Your account has been created.`);
    // Here you would normally send data to your server for processing
  });
  
  // Placeholder for FB and Twitter auth
  document.getElementById("fb-btn").addEventListener("click", function() {
    // Normally you'd call your Facebook OAuth flow here
    // For demonstration, we just show an alert
    alert("Facebook authentication flow goes here!");
  });
  
  document.getElementById("twitter-btn").addEventListener("click", function() {
    // Normally you'd call your Twitter OAuth flow here
    // For demonstration, we just show an alert
    alert("Twitter authentication flow goes here!");
  });
  