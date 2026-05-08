const modeToggle = document.getElementById("mode-toggle");

// Toggle Dark / Light Mode
modeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Change icon dynamically
    if (document.body.classList.contains("dark-mode")) {
        modeToggle.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        modeToggle.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Keep theme same after refresh
window.addEventListener("load", () => {

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        modeToggle.innerHTML = "☀️";
    } else {
        modeToggle.innerHTML = "🌙";
    }

});


// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Simple form validation alert (contact form)
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully! I will contact you soon.");
    form.reset();
});