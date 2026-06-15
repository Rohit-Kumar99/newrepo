// const adminEmail = "someone@admin.com";
// const adminPassword = "Admin@123";

// const userEmail = "someone@user.com";
// const userPassword = "User@123";

// let emailInput = document.getElementById("email");
// let passwordInput = document.getElementById("password");
// let loginButton = document.getElementById("submitButton");
// loginButton.addEventListener("click", login);

// const form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const email = emailInput.value;
//     const password = passwordInput.value;

//     if (email === adminEmail && password === adminPassword) {
//         alert("Admin login successful!");
//         window.location.href = "../dashboard/index.html";
//     } 
//     else if (email === userEmail && password === userPassword) {
//         alert("User login successful!");
//         window.location.href = "../dashboard/ecom/index.html";
//     } 
//     else {
//         alert("Invalid email or password.");
//     }
// });




const adminEmail    = "someone@admin.com";
const adminPassword = "Admin@123";
const userEmail     = "someone@user.com";
const userPassword  = "User@123";

const emailInput    = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form          = document.getElementById("loginForm");
const submitBtn     = document.getElementById("submitButton");
const toast         = document.getElementById("toast");

// ─── Password visibility toggle ───────────────────────────
document.getElementById("togglePassword").addEventListener("click", function () {
    const isText = passwordInput.type === "text";
    passwordInput.type = isText ? "password" : "text";
    document.getElementById("eyeIcon").innerHTML = isText
        ? `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.5"/>
           <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>`
        : `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
             stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`;
});

// ─── Toast helper ─────────────────────────────────────────
let toastTimer;
function showToast(message, type = "error") {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    toastTimer = setTimeout(() => { toast.className = "toast"; }, 3500);
}

// ─── Inline validation helpers ────────────────────────────
function setError(inputEl, errorId, message) {
    inputEl.classList.add("is-error");
    document.getElementById(errorId).textContent = message;
}

function clearError(inputEl, errorId) {
    inputEl.classList.remove("is-error");
    document.getElementById(errorId).textContent = "";
}

emailInput.addEventListener("input", () => clearError(emailInput, "emailError"));
passwordInput.addEventListener("input", () => clearError(passwordInput, "passwordError"));

// ─── Form submit ──────────────────────────────────────────
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email    = emailInput.value.trim();
    const password = passwordInput.value;
    let valid = true;

    if (!email) {
        setError(emailInput, "emailError", "Please enter your email address.");
        valid = false;
    }

    if (!password) {
        setError(passwordInput, "passwordError", "Please enter your password.");
        valid = false;
    }

    if (!valid) return;

    // Simulate brief loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;

        if (email === adminEmail && password === adminPassword) {
            sessionStorage.setItem("role", "admin");
            showToast("Welcome back, Admin! Redirecting…", "success");
            setTimeout(() => { window.location.href = "../dashboard/index.html"; }, 1500);
        } else if (email === userEmail && password === userPassword) {
            sessionStorage.setItem("role", "user");
            showToast("Welcome back! Redirecting…", "success");
            setTimeout(() => { window.location.href = "../dashboard/ecom/index.html"; }, 1500);
        } else {
            showToast("Incorrect email or password. Please try again.", "error");
            setError(emailInput, "emailError", " ");
            setError(passwordInput, "passwordError", "Credentials don't match our records.");
        }
    }, 700);
});