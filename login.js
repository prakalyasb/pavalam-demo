/* ==========================================
   PAVALAM INDUSTRIES
   LOGIN.JS
========================================== */

// Remember Me
window.onload = function () {

    const savedUser = localStorage.getItem("username");

    if (savedUser) {
        document.getElementById("username").value = savedUser;
    }

};

// ================================
// Show / Hide Password
// ================================

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");

    }

    else {

        password.type = "password";

        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");

    }

});

// ================================
// Login Validation
// ================================

document.getElementById("loginForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const passwordValue =
        document.getElementById("password").value.trim();

    const remember =
        document.querySelector("input[type='checkbox']").checked;

    if (username === "" || passwordValue === "") {

        alert("Please fill in all fields.");

        return;

    }

    // Demo Login Credentials
    // Username: admin
    // Password: admin123

    if (username === "admin" &&
        passwordValue === "admin123") {

        if (remember) {

            localStorage.setItem("username", username);

        }

        else {

            localStorage.removeItem("username");

        }

        alert("Login Successful!\nWelcome to Pavalam Industries.");

        setTimeout(function () {

            window.location.href = "index.html";

        }, 500);

    }

    else {

        alert("Invalid Username or Password!");

    }

});

// ================================
// Google Button
// ================================

document.querySelector(".google")
.addEventListener("click", function () {

    alert(
        "Google Login will be available in the future."
    );

});

// ================================
// Enter Key Support
// ================================

document.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        document.getElementById("loginForm")
        .dispatchEvent(new Event("submit"));

    }

});