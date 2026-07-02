// ================= CUSTOM DOT CURSOR =================

const DOT_COUNT = 20;
const dots = [];

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Create trail dots
for (let i = 0; i < DOT_COUNT; i++) {

    const dot = document.createElement("div");
    dot.className = "trail-dot";

    document.body.appendChild(dot);

    dots.push({
        x: mouse.x,
        y: mouse.y,
        scale: (DOT_COUNT - i) / DOT_COUNT,
        element: dot
    });

}

function animate() {

    let x = mouse.x;
    let y = mouse.y;

    dots.forEach((dot) => {

        dot.x += (x - dot.x) * 0.35;
        dot.y += (y - dot.y) * 0.35;

        dot.element.style.left = dot.x + "px";
        dot.element.style.top = dot.y + "px";

        dot.element.style.transform =
            `translate(-50%, -50%) scale(${dot.scale})`;

        dot.element.style.opacity = dot.scale;

        x = dot.x;
        y = dot.y;

    });

    requestAnimationFrame(animate);

}

animate();

// Grow trail when hovering interactive elements
const hoverItems = document.querySelectorAll(
    "a, button, .btn, .btn-outline, .card"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        dots.forEach(dot => {
            dot.element.style.width = "14px";
            dot.element.style.height = "14px";
        });

    });

    item.addEventListener("mouseleave", () => {

        dots.forEach(dot => {
            dot.element.style.width = "10px";
            dot.element.style.height = "10px";
        });

    });

});

// Hide cursor trail on touch devices
if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {

    dots.forEach(dot => {
        dot.element.style.display = "none";
    });

}
