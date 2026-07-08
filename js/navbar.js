// ======================================
// LIMITLEZZ NAVBAR
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    // ==========================
    // MOBILE MENU
    // ==========================

    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileBtn && mobileMenu) {

        mobileBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

        });

    }

    // ==========================
    // GAME HOSTING DROPDOWN
    // ==========================

    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {

        const menu = dropdown.querySelector(".dropdown-menu");

        // Desktop
        if (window.innerWidth > 900) {

            dropdown.addEventListener("mouseenter", () => {
                menu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                menu.classList.remove("show");
            });

        }

        // Mobile
        else {

            const trigger = dropdown.querySelector("a");

            trigger.addEventListener("click", function (e) {

                e.preventDefault();

                menu.classList.toggle("show");

            });

        }

    }

    // ==========================
    // NAVBAR SCROLL EFFECT
    // ==========================

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 20) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    // ==========================
    // ACTIVE PAGE
    // ==========================

    const current = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href === current ||
            (current === "" && href === "index.html")
        ) {

            link.classList.add("active");

        }

    });

});
