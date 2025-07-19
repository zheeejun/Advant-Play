import initCarousel from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
  // 手機選單切換 (既有)
  const btn = document.querySelector("#mobile-menu-button");
  const menu = document.querySelector("#mobile-menu");
  btn.addEventListener("click", () => menu.classList.toggle("hidden"));

  // 初始化 Carousel
  initCarousel('#carousel-container', [
    './images/slide1.jpg',
    './images/slide2.jpg',
    './images/slide3.jpg',
  ]);
});ㄋ