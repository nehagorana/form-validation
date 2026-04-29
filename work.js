// Get form
const form = document.getElementById("bookingForm");

// Run on submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop default submit

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Get values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const dob = document.getElementById("dob").value;
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const departure = document.getElementById("departure").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    // Name validation
    if (fname === "") {
        showError("fname", "First name is required");
        isValid = false;
    }

    if (lname === "") {
        showError("lname", "Last name is required");
        isValid = false;
    }

    // DOB
    if (dob === "") {
        showError("dob", "Date of birth is required");
        isValid = false;
    }

    // From/To
    if (from === "") {
        showError("from", "Departure city is required");
        isValid = false;
    }

    if (to === "") {
        showError("to", "Destination city is required");
        isValid = false;
    }

    // Departure date
    if (departure === "") {
        showError("departure", "Departure date is required");
        isValid = false;
    }

    // Phone validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError("phone", "Enter valid 10-digit number");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        showError("email", "Enter valid email");
        isValid = false;
    }

    // Username
    if (username === "") {
        showError("username", "Username required");
        isValid = false;
    }

    // Password
    if (password.length < 6) {
        showError("password", "Minimum 6 characters");
        isValid = false;
    }

    // Confirm password
    if (password !== confirm) {
        showError("confirm", "Passwords do not match");
        isValid = false;
    }

    // If all valid
    if (isValid) {
        alert("Your details are successfully saved!");
        form.reset();
    }
});


// Function to show error
function showError(id, message) {
    const element = document.getElementById(id);

    const error = document.createElement("small");
    error.style.color = "red";
    error.innerText = message;

    element.parentNode.appendChild(error);
}


// Clear old errors
function clearErrors() {
    const errors = document.querySelectorAll("small");
    errors.forEach(e => e.remove());
}