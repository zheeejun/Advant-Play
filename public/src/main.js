// 1. 先註冊 recommended‑title 這個 Custom Element
import './components/recommended-title.js'
// 2. 再載入你的 carousel 初始化函式
import initCarousel from './components/carousel.js'

document.addEventListener('DOMContentLoaded', () => {
  // ─── 手機選單切換 (既有) ───
  const btn  = document.querySelector("#mobile-menu-button")
  const menu = document.querySelector("#mobile-menu")
  btn.addEventListener("click", () => menu.classList.toggle("hidden"))

  // ─── 插入 Recommended Title ───
  // 假設 HTML 裡有 <section id="recommend-section"></section>
  const recommendSection = document.querySelector('#recommend-section')
  if (recommendSection) {
    const titleEl = document.createElement('recommended-title')
    titleEl.setAttribute('text', 'Recommended for you')
    // 你可以用 prepend / appendChild / insertBefore 依需求放位置
    recommendSection.prepend(titleEl)
  }

  // ─── 初始化 Carousel ───
  initCarousel('#carousel-container', [
  './src/components/images/slide1.webp',
  './src/components/images/slide2.jpg',
  './src/components/images/slide3.jpg',
  ])
})
