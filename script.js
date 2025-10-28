// Typing animation for tagline
const typingText = document.getElementById("typing-text");
const text = "AI • Full Stack Development • Data Analytics Enthusiast";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

// Fade-in animation for sections
const sections = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
