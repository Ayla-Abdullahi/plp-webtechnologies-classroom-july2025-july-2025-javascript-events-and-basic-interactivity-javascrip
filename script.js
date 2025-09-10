// 🎉 Part 1: Event Handling
const messageBtn = document.getElementById("messageBtn");
const messageArea = document.getElementById("messageArea");

messageBtn.addEventListener("click", () => {
  messageArea.textContent = "Hello, welcome to our interactive page! procceed to explore.";
});

// Part 2: Interactive Elements
// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Section (collapsible answers)
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");
  });
});

// Part 3: Form Validation
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Validate Email with regex
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    document.getElementById("formMessage").textContent = "your Form has been submitted successfully!🥳";
    signupForm.reset();
  }
});
