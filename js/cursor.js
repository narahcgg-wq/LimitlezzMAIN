// ======================================
// LIMITLEZZ CURSOR
// ======================================

if(window.innerWidth > 768){

const DOTS = 20;

const dots = [];

let mouse = {

x:window.innerWidth/2,

y:window.innerHeight/2

};

document.addEventListener("mousemove",e=>{

mouse.x=e.clientX;

mouse.y=e.clientY;

});

for(let i=0;i<DOTS;i++){

const d=document.createElement("div");

d.className="trail-dot";

document.body.appendChild(d);

dots.push({

x:mouse.x,

y:mouse.y,

scale:(DOTS-i)/DOTS,

el:d

});

}

function animate(){

let x=mouse.x;

let y=mouse.y;

dots.forEach(dot=>{

dot.x+=(x-dot.x)*0.35;

dot.y+=(y-dot.y)*0.35;

dot.el.style.left=dot.x+"px";

dot.el.style.top=dot.y+"px";

dot.el.style.opacity=dot.scale;

dot.el.style.transform=`translate(-50%,-50%) scale(${dot.scale})`;

x=dot.x;

y=dot.y;

});

requestAnimationFrame(animate);

}

animate();

document.querySelectorAll("a,.btn,.btn-outline,.card,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

dots.forEach(dot=>{

dot.el.style.width="14px";

dot.el.style.height="14px";

});

});

el.addEventListener("mouseleave",()=>{

dots.forEach(dot=>{

dot.el.style.width="10px";

dot.el.style.height="10px";

});

});

});

}
