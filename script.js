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
