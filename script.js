/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");

}


/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("formMessage");

        message.textContent =
            "Thank you! Your message has been received.";

        form.reset();

    });

}