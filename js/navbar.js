// ======================================
// LIMITLEZZ NAVBAR
// ======================================

document.addEventListener("DOMContentLoaded", () => {

const navbar = document.querySelector(".navbar");
const mobileBtn = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

// ===========================
// Mobile Menu
// ===========================

if (mobileBtn && navLinks) {

mobileBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}

// ===========================
// Mobile Dropdown
// ===========================

if (dropdown && window.innerWidth <= 900) {

const trigger = dropdown.querySelector("a");

trigger.addEventListener("click", function(e){

e.preventDefault();

dropdown.classList.toggle("active");

});

}

// ===========================
// Navbar Scroll Effect
// ===========================

window.addEventListener("scroll", () => {

if(window.scrollY > 30){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

// ===========================
// Active Page
// ===========================

const page = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

const href = link.getAttribute("href");

if(page === href || (page === "" && href === "index.html")){

link.classList.add("active");

}

});

});
