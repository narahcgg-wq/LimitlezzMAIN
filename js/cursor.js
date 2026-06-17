const nav = document.querySelector("nav");
const services = document.querySelector("#services");

if(nav && services){

window.addEventListener("scroll", () => {

  const trigger = services.offsetTop - 120;
  const progress = Math.min(window.scrollY / trigger, 1);

  if(window.scrollY > trigger){
    nav.classList.add("nav-fade");
  } else {
    nav.classList.remove("nav-fade");
  }

  // extra smooth feel (dynamic blur/opacity)
  nav.style.opacity = 1 - (progress * 0.6);
  nav.style.transform = `translateY(${-progress * 14}px)`;

});

}