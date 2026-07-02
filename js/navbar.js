// ================================
// LIMITLEZZ NAVBAR DROPDOWN
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        const menu = dropdown.querySelector(".dropdown-menu");

        if (!menu) return;

        // ==========================
        // DESKTOP HOVER
        // ==========================

        dropdown.addEventListener("mouseenter", () => {

            if(window.innerWidth > 768){

                menu.classList.add("show");

            }

        });

        dropdown.addEventListener("mouseleave", () => {

            if(window.innerWidth > 768){

                menu.classList.remove("show");

            }

        });

        // ==========================
        // MOBILE CLICK
        // ==========================

        dropdown.querySelector("a").addEventListener("click", function(e){

            if(window.innerWidth <= 768){

                e.preventDefault();

                document.querySelectorAll(".dropdown-menu").forEach(m=>{

                    if(m!==menu){

                        m.classList.remove("show");

                    }

                });

                menu.classList.toggle("show");

            }

        });

    });

    // ==========================
    // CLICK OUTSIDE TO CLOSE
    // ==========================

    document.addEventListener("click",(e)=>{

        if(!e.target.closest(".dropdown")){

            document.querySelectorAll(".dropdown-menu").forEach(menu=>{

                menu.classList.remove("show");

            });

        }

    });

});

// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar") || document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>20){

        navbar.style.background="rgba(10,10,18,.95)";
        navbar.style.borderColor="rgba(139,92,246,.35)";
        navbar.style.boxShadow=
        "0 0 0 1px rgba(139,92,246,.30),0 0 35px rgba(139,92,246,.22),0 15px 45px rgba(0,0,0,.55)";

    }else{

        navbar.style.background="rgba(10,10,18,.82)";
        navbar.style.borderColor="rgba(139,92,246,.18)";
        navbar.style.boxShadow=
        "0 0 0 1px rgba(139,92,246,.12),0 0 25px rgba(139,92,246,.12),0 12px 40px rgba(0,0,0,.45)";

    }

});

// ================================
// ACTIVE PAGE
// ================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

    const href = link.getAttribute("href");

    if(
        href===currentPage ||
        (currentPage==="" && href==="index.html")
    ){

        link.classList.add("active");

    }

});
