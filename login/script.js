const adminEmail = "someone@admin.com";
const adminPassword = "Admin@123";

const userEmail = "someone@user.com";
const userPassword = "User@123";

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginButton = document.getElementById("submitButton");
loginButton.addEventListener("click", login);

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === adminEmail && password === adminPassword) {
        alert("Admin login successful!");
        window.location.href = "../dashboard/index.html";
    } 
    else if (email === userEmail && password === userPassword) {
        alert("User login successful!");
        window.location.href = "../dashboard/ecom/index.html";
    } 
    else {
        alert("Invalid email or password.");
    }
});