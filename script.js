// ======================
// Navbar Scroll Effect
// ======================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 40){
        header.style.background = "rgba(7,11,20,.88)";
        header.style.backdropFilter = "blur(20px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
    }else{
        header.style.background = "rgba(7,11,20,.55)";
        header.style.backdropFilter = "blur(18px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
    }
});
// ======================
// Reveal Animation
// ======================
const reveals = document.querySelectorAll(
".section,.project-card,.timeline-item,.achievement-card,.research-card,.patent-card"
);
const observer = new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},
{
threshold:.15
}
);
reveals.forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});
// ======================
// Animated Stats
// ======================
const stats = document.querySelectorAll(".stat h2");
stats.forEach(stat=>{
const value = parseInt(stat.innerText);
if(isNaN(value)) return;
let current = 0;
const speed = value / 40;
const update = ()=>{
current += speed;
if(current < value){
stat.innerText = Math.floor(current);
requestAnimationFrame(update);
}else{
stat.innerText = value + (value >= 10 ? "+" : "");
}
}
update();
});
// ======================
// Active Navigation
// ======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
let current = "";
sections.forEach(section=>{
const top = section.offsetTop - 120;
if(scrollY >= top){
current = section.getAttribute("id");
}
});
navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href")==="#" + current){
link.classList.add("active");
}
});
});
// ======================
// Smooth Scroll
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
const href = anchor.getAttribute("href");
// Skip bare "#" links (e.g. the logo) — document.querySelector("#")
// throws, which was silently breaking clicks on any card with a
// placeholder "#" link.
if(href.length <= 1) return;
anchor.addEventListener("click",function(e){
e.preventDefault();
const target = document.querySelector(href);
if(target){
target.scrollIntoView({
behavior:"smooth"
});
}
});
});
// ======================
// Cursor Glow
// ======================
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});
// ======================
// Tilt Cards
// ======================
document.querySelectorAll(".project-card").forEach(card=>{
card.addEventListener("mousemove",(e)=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const rotateY = ((x / rect.width)-0.5)*12;
const rotateX = ((y / rect.height)-0.5)*-12;
card.style.transform = `
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;
});
card.addEventListener("mouseleave",()=>{
card.style.transform = "";
});
});
// ======================
// Fade Hero
// ======================
const hero = document.querySelector(".hero");
window.addEventListener("scroll",()=>{
hero.style.opacity = 1 - window.scrollY / 900;
});
// ======================
// Current Year
// ======================
const footer = document.querySelector("footer p");
footer.innerHTML =
`© ${new Date().getFullYear()} Kasvi Rajwar • Designed & Developed by Kasvi Rajwar`;
