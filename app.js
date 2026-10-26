
// ========== LIGHT / DARK THEME ==========

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Pehle se saved theme check karo
const savedTheme = localStorage.getItem("portfolioTheme");

// Agar user ne pehle theme select ki hai to woh lagao
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        themeIcon.className = "bi bi-sun-fill";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    } else {
        themeIcon.className = "bi bi-moon-stars-fill";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    }
}

updateThemeButton();

// Button click par theme change karo
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    // Selected theme browser mein save karo
    localStorage.setItem(
        "portfolioTheme",
        isDark ? "dark" : "light"
    );

    updateThemeButton();
});


// ========== MOBILE NAVBAR ==========

const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarMenu.classList.contains("show")) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarMenu)
                .hide();
        }
    });
});


// ========== FOOTER YEAR ==========

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========== CONTACT FORM ==========

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    const recipient = "sadiakhan123459@gmail.com";

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formMessage.textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + emailSubject +
        "&body=" + emailBody;
});
