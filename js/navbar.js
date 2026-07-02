// =========================
// FLOATING NAVBAR + DROPDOWN
// =========================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {

    const menu = drop.querySelector(".dropdown-menu");

    if (!menu) return;

    drop.addEventListener("mouseenter", () => {
        menu.classList.add("show");
    });

    drop.addEventListener("mouseleave", () => {
        menu.classList.remove("show");
    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 25){

        navbar.style.background = "rgba(10,10,18,.92)";
        navbar.style.boxShadow =
        "0 0 0 1px rgba(139,92,246,.22), 0 0 35px rgba(139,92,246,.22), 0 18px 45px rgba(0,0,0,.55)";

    }else{

        navbar.style.background = "rgba(10,10,18,.82)";
        navbar.style.boxShadow =
        "0 0 0 1px rgba(139,92,246,.12), 0 0 25px rgba(139,92,246,.12), 0 12px 40px rgba(0,0,0,.45)";

    }

});

// =========================
// ACTIVE PAGE
// =========================

const current = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if(href === current || (current === "" && href === "index.html")){
        link.classList.add("active");
    }

});
