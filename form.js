document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("❌ All fields are required!");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    return false;
  }

  alert("✅ Thank you! Your message has been submitted successfully.");
  this.reset();
});