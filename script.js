document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".gundem-scroll");
  const scrollNext = document.querySelector(".scroll-next");
  const scrollPrev = document.querySelector(".scroll-previous");

  const originalCards = Array.from(scrollContainer.children);

  // Kartları başa ve sona kopyala
  const prependClones = originalCards.map(card => {
    const clone = card.cloneNode(true);
    scrollContainer.insertBefore(clone, scrollContainer.firstChild);
    return clone;
  });

  const appendClones = originalCards.map(card => {
    const clone = card.cloneNode(true);
    scrollContainer.appendChild(clone);
    return clone;
  });

  const cardWidth = originalCards[0].offsetWidth + 16;
  const originalSetWidth = originalCards.length * cardWidth;
  scrollContainer.scrollLeft = originalSetWidth;

  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = originalSetWidth;
    } else if (scrollContainer.scrollLeft >= originalSetWidth * 2) {
      scrollContainer.scrollLeft = originalSetWidth;
    }
  });

  scrollNext.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  scrollPrev.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
});

function animateCircleFill() {
  const circleFill = document.querySelector('.first-crousel .circle-fill');
  if (!circleFill) return;
  circleFill.style.strokeDashoffset = '0';
}
 document.addEventListener("DOMContentLoaded", function () {
    const growingIcons = document.querySelectorAll(".growingIcon");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "scale(1.2)";
        }
      });
    }, {
      threshold: 0.5, // Elemanın %50'si görünürse animasyonu başlat
    });

    growingIcons.forEach((icon) => {
      observer.observe(icon);
    });
  });
document.addEventListener('DOMContentLoaded', () => {
  animateCircleFill();

  const quotes = [
    { text: "Doğa, insanın en büyük müttefikidir; ona sahip çıkmak, geleceğe sahip çıkmaktır.", author: "Franklin D. Roosevelt" },
    { text: "Dünya bize atalarımızdan miras kalmadı; çocuklarımızdan ödünç aldık.", author: "Kızılderili Atasözü" },
    { text: "Çevreyi korumak, insanlığın kendini korumasıdır.", author: "Gro Harlem Brundtland" },
    { text: "Doğaya karşı işlenen suç, insanlığa karşı işlenmiş sayılır.", author: "Barack Obama" }
  ];

  let current = 0;
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  function showNextQuote() {
    quoteText.classList.add("slide-out");
    quoteAuthor.classList.add("slide-out");

    setTimeout(() => {
      current = (current + 1) % quotes.length;
      quoteText.textContent = `"${quotes[current].text}"`;
      quoteAuthor.textContent = quotes[current].author;

      quoteText.classList.remove("slide-out");
      quoteAuthor.classList.remove("slide-out");

      quoteText.classList.add("slide-in");
      quoteAuthor.classList.add("slide-in");

      setTimeout(() => {
        quoteText.classList.remove("slide-in");
        quoteAuthor.classList.remove("slide-in");
      }, 500);
    }, 500);
  }
  setInterval(showNextQuote, 6000);
  
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
});
const container = document.querySelector('.card-wrapper-gundem');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const scrollAmount = 300;

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

function playAnimation(button) {
    const player = button.querySelector('dotlottie-player');
    if (player) {
      player.style.opacity = 1;
      player.stop(); // önce durdur
      player.play(); // sonra oynat
      setTimeout(() => {
        player.style.opacity = 0;
      }, 1000); // animasyon süresi kadar sonra gizle (ms cinsinden)
    }
  }