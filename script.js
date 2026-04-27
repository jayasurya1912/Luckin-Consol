

  window.addEventListener("load", function() {
    const preloader = document.getElementById("lkc-preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });




let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// AUTO SLIDE
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);

// NEXT
next.onclick = function () {
    itemActive++;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
};

// PREV
prev.onclick = function () {
    itemActive--;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
};

// SHOW SLIDER
function showSlider() {

    let itemActiveOld = document.querySelector('.slider .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // RESET AUTO SLIDE (IMPORTANT)
    clearInterval(refreshInterval);

    refreshInterval = setInterval(() => {
        next.click();
    }, 3000); // 👈 same speed
}

// THUMBNAIL CLICK
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});


  let currentIndex = 0;
  const track = document.getElementById("sliderTrack");
  const cardse = document.querySelectorAll(".slider-card");
  const maxVisibleSlides = 4; // reset after 4 slides

  function updateSliderPosition() {
    const cardWidth = cardse[0].offsetWidth;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function moveRight() {
    currentIndex++;
    if (currentIndex >= maxVisibleSlides) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function moveLeft() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = maxVisibleSlides - 1;
    }
    updateSliderPosition();
  }

  // Auto-slide every 4 seconds
  setInterval(moveRight, 2000);

  // On resize, adjust position
  window.addEventListener("resize", updateSliderPosition);

document.querySelectorAll(".lx-mobile-toggle").forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });
});


const counters = document.querySelectorAll('.lx-count');

counters.forEach(counter => {
  let target = +counter.getAttribute('data-count');
  let count = 0;
  let speed = target / 100;

  function updateCount() {
    count += speed;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  }

  updateCount();
});

     window.addEventListener("load", () => {
      const preloader = document.getElementById("firePreloader");
      preloader.classList.add("fire-hidden");
    });
    const scrollBtn = document.getElementById("fireScrollTop");

    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
