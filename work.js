const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let departure = document.getElementById("departure").value;
    let ret = document.getElementById("return").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let today = new Date();
    let minDate = "2026-01-01";

    if (departure < minDate || ret < minDate) {
        alert("Dates cannot be before 2026");
        return;
    }

    if (ret < departure) {
        alert("Return date must be after departure date");
        return;
    }

    let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,16}$/;

    if (!passPattern.test(password)) {
        alert("Password must be 8-16 chars, include capital, number & special character");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    alert("Your details are successfully saved!");
});
let departure = document.getElementById("departure").value;
let ret = document.getElementById("return").value;

let minDate = "2026-04-29";

if (departure < minDate || ret < minDate) {
    alert("Dates cannot be before 2025");
    return;
}

if (ret < departure) {
    alert("Return date must be after departure date");
    return;
}