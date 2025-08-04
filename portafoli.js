window.addEventListener("load", () => {
    // Botón menú hamburguesa
    document.querySelector(".menu-btn").addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("show");
    });
  
    // Carrusel
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');
    let lengthItems = items.length - 1;
    let active = 0;
  
    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };
  
    let refreshInterval = setInterval(() => {
      next.click();
    }, 300000);
  
    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';
  
      let last_active_dot = document.querySelector('.slider .dots li.active');
      if (last_active_dot) last_active_dot.classList.remove('active');
      if (dots[active]) dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 300000);
    }
  
    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });
  
    window.onresize = function (event) {
      reloadSlider();
    };
  
    // Animación del menú (solo si tienes estos elementos en tu HTML)
    const barsMenu = document.querySelector(".bars__menu");
    if (barsMenu) {
      barsMenu.addEventListener("click", animateBars);
  
      var line1__bars = document.querySelector(".line1__bars-menu");
      var line2__bars = document.querySelector(".line2__bars-menu");
      var line3__bars = document.querySelector(".line3__bars-menu");
  
      function animateBars() {
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
      }
    }
  
    // Modal logic
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalVideo = document.getElementById("modal-video");
    const closeBtn = document.querySelector(".close");
  
    document.querySelectorAll(".slider .item img, .slider .item video").forEach((media) => {
      media.addEventListener("click", () => {
        modal.style.display = "block";
  
        if (media.tagName === "IMG") {
          modalImg.src = media.src;
          modalImg.style.display = "block";
          modalVideo.style.display = "none";
        } else if (media.tagName === "VIDEO") {
          modalVideo.src = media.querySelector("source").src;
          modalVideo.style.display = "block";
          modalImg.style.display = "none";
        }
      });
    });
  
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = media.querySelector("source").src;
        modalVideo.load(); // Asegura que se recargue al abrir;
      };
    }
  });