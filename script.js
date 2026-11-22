
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Mobile Navigation
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    menuBtn.textContent =
        menu.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// WhatsApp Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    const text =
        `Hello Anjal Digital Skill!

Name: ${name}
Email: ${email}
Message: ${message}`;

    const url =
        "https://wa.me/919913379665?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");

});
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuBtn.textContent =
            menu.classList.contains("active") ? "✕" : "☰";
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            menuBtn.textContent = "☰";
        });
    });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const text = `Hello Anjal Digital Skill!
Name: ${name}
Email: ${email}
Message: ${message}`;

        const url = "https://wa.me/919913379665?text=" +
            encodeURIComponent(text);

        window.open(url, "_blank");
    });
}
