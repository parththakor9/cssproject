document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.style.visibility = "hidden");
  
    // Validate Name
    if (nameInput.value.trim() === "") {
      displayError(nameInput, "Name is required.");
      isValid = false;
    }
  
    // Validate Email
    if (!isValidEmail(emailInput.value)) {
      displayError(emailInput, "Invalid email address.");
      isValid = false;
    }
  
    // Validate Message
    if (messageInput.value.trim() === "") {
      displayError(messageInput, "Message cannot be empty.");
      isValid = false;
    }
  
    // Form Submission
    if (isValid) {
      alert("Thank you for reaching out to us!");
      document.getElementById("contactForm").reset();
    }
  });
  
  function displayError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.visibility = "visible";
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  