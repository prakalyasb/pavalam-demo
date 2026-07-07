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
.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const remember =
        document.querySelector("input[type='checkbox']").checked;

    if (email === "" || password === "") {

        alert("Please fill in all fields.");
        return;

    }

    try {

        const response = await fetch(
            "http://localhost:5000/api/users/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            if (remember) {

                localStorage.setItem("username", email);

            } else {

                localStorage.removeItem("username");

            }

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(data.user)
            );

            alert("Login Successful!");

            window.location.href = "index.html";

        }

        else {

            alert(data.message);

        }

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to server.");

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