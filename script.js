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
