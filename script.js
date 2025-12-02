/* Animated particle background */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let width, height, particles;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  initParticles();
}
window.addEventListener("resize", resize);

function initParticles() {
  particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: (Math.random() - 0.5) * 0.4,
  }));
}

function animate() {
  ctx.fillStyle = "rgba(10, 15, 26, 0.3)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#3b82f6";
  particles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

resize();
animate();

/* Smooth "Learn More" scroll */
/* document.getElementById("learnMore").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

/* Highlight navbar item based on scroll position */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

/* Background color shifting */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const body = document.body;

  if (scrollY < window.innerHeight * 0.8) {
    body.style.background = "#0a0f1a";
  } else if (scrollY < window.innerHeight * 1.8) {
    body.style.background = "#0c1322";
  } else if (scrollY < window.innerHeight * 2.8) {
    body.style.background = "#0e162b";
  } else {
    body.style.background = "#10192f";
  }
});

/* Fade-in scroll animations */
const faders = document.querySelectorAll(".fade");
const appearOptions = { threshold: 0.25 };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fade) => appearOnScroll.observe(fade));