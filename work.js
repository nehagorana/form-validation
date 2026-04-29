document.getElementById("dob").addEventListener("change", function () {
    let dob = new Date(this.value);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("age").value = age;
});


// PASSWORD STRENGTH
document.getElementById("password").addEventListener("input", function () {
    let val = this.value;
    let strength = document.getElementById("strength");

    if (val.length < 6) {
        strength.textContent = "Weak";
        strength.style.color = "red";
    } else if (val.match(/[A-Z]/) && val.match(/[0-9]/) && val.match(/[@$!%*?&]/)) {
        strength.textContent = "Strong";
        strength.style.color = "green";
    } else {
        strength.textContent = "Medium";
        strength.style.color = "orange";
    }
});


// DATE RESTRICTIONS
let today = new Date().toISOString().split("T")[0];
document.getElementById("departure").setAttribute("min", today);
document.getElementById("return").setAttribute("min", today);


// PASSWORD MATCH CHECK
document.getElementById("form").addEventListener("submit", function (e) {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (pass !== confirm) {
        alert("Passwords do not match!");
        e.preventDefault();
    }
});