document.addEventListener("DOMContentLoaded", function() {
    const scrollNext = document.querySelector(".scroll-next");
    const scrollPrev = document.querySelector(".scroll-previous");
    const gundemScroll = document.querySelector(".gundem-scroll");

    scrollNext.addEventListener("click", function() {
        gundemScroll.scrollBy({ left: 300, behavior: "smooth" });
    });

    scrollPrev.addEventListener("click", function() {
        gundemScroll.scrollBy({ left: -300, behavior: "smooth" });
    });
});
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const scale = 0.1 + scrollPercent + 0.5;
    document.querySelectorAll(".growingIcon").forEach((icon) => {
      icon.style.transform = `scale(${scale})`;
    });
  });
// Animasyonu başlatan fonksiyon
function animateCircleFill() {
  const circleFill = document.querySelector('.first-crousel .circle-fill');
  if (!circleFill) return;

  // stroke-dashoffset sıfıra düşerse dolu görünür
  circleFill.style.strokeDashoffset = '0';
}

// Sayfa yüklendiğinde veya istersen carousel slide değiştiğinde çağırabilirsin
document.addEventListener('DOMContentLoaded', () => {
  animateCircleFill();
});
