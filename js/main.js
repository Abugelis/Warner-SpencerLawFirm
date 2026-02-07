const hamburger = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute("aria-expanded", !isOpen);
    mobileMenu.classList.toggle("active");
});