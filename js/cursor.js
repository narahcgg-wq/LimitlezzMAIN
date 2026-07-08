// ===========================
// MOBILE MENU
// ===========================

const mobileBtn = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===========================
// MOBILE DROPDOWN
// ===========================

const dropdown = document.querySelector(".dropdown");

if (dropdown && window.innerWidth <= 900) {

    dropdown.querySelector("a").addEventListener("click", function(e) {

        e.preventDefault();

        dropdown.classList.toggle("active");

    });

}

// ===========================
// DESKTOP DROPDOWN
// ===========================

if (dropdown && window.innerWidth > 900) {

    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {

        menu.classList.add("show");

    });

    dropdown.addEventListener("mouseleave", () => {

        menu.classList.remove("show");

    });

}

// ===========================
// NAVBAR SCROLL
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ===========================
// ACTIVE PAGE
// ===========================

const current = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === current || (current === "" && href === "index.html")) {

        link.classList.add("active");

    }

});
