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
function animateCircleFill() {
  const circleFill = document.querySelector('.first-crousel .circle-fill');
  if (!circleFill) return;

  circleFill.style.strokeDashoffset = '0';
}

document.addEventListener('DOMContentLoaded', () => {
  animateCircleFill();
});

//Oyun 1 Kodları
let score = 0;
let draggedItem = null;

// Rastgele konumlandırma fonksiyonu
function randomPosition(item, container) {
  const contWidth = container.clientWidth;
  const contHeight = container.clientHeight;
  const itemWidth = item.offsetWidth;
  const itemHeight = item.offsetHeight;

  const maxLeft = contWidth - itemWidth;
  const maxTop = contHeight - itemHeight;

  const left = Math.floor(Math.random() * maxLeft);
  const top = Math.floor(Math.random() * maxTop);

  item.style.left = left + 'px';
  item.style.top = top + 'px';
}

window.onload = () => {
  const itemsContainer = document.querySelector('.items');
  const items = document.querySelectorAll('.items .item');
  items.forEach(item => {
    randomPosition(item, itemsContainer);
    item.addEventListener('dragstart', dragStart);
  });
};

function dragStart(e) {
  draggedItem = e.target;
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const acceptedType = e.currentTarget.dataset.accept;
  const itemType = draggedItem.dataset.type;

  if (itemType === acceptedType) {
    e.currentTarget.appendChild(draggedItem);
    randomPosition(draggedItem, e.currentTarget);
    score += 10;
    updateScore();
  } else {
    alert("Yanlış kutu!");
  }

  checkGameEnd();
}

function updateScore() {
  document.getElementById('score').textContent = score;
}

function checkGameEnd() {
  const itemsLeft = document.querySelectorAll('.items .item').length;
  if (itemsLeft === 0) {
    const celebrationDiv = document.getElementById('celebration');  
    celebrationDiv.style.display = 'block';
    setTimeout(() => {
      celebrationDiv.style.display = 'none';
    }, 3000);
  }
}
