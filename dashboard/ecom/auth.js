// auth.js
const role = sessionStorage.getItem("role");

if (role === "admin") {
    const link = document.getElementById("dashboardLink");
    if (link) link.style.display = "inline-block";
}