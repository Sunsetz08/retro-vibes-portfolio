// Esperar a que la página cargue completamente
window.addEventListener("load", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Animación de las barras (si existe)
  const barsMenu = document.querySelector(".bars__menu");
  const line1 = document.querySelector(".line1__bars-menu");
  const line2 = document.querySelector(".line2__bars-menu");
  const line3 = document.querySelector(".line3__bars-menu");

  if (barsMenu && line1 && line2 && line3) {
    barsMenu.addEventListener("click", () => {
      line1.classList.toggle("activeline1__bars-menu");
      line2.classList.toggle("activeline2__bars-menu");
      line3.classList.toggle("activeline3__bars-menu");
    });
  }
});


