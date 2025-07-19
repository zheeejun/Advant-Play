// public/src/components/recommended-title.js
console.log('recommended-title.js loaded');
class RecommendedTitle extends HTMLElement {
  connectedCallback() {
    // 從屬性拿文字
    const text = this.getAttribute('text') || '';
    // 直接把 innerHTML 換成一個 flex 排版＋線條＋文字的區塊
    this.innerHTML = `
      <div class="flex items-center justify-center text-yellow-400 space-x-2 my-8">
        <hr class="flex-1 border-t border-yellow-400" />
        <span class="px-4 text-2xl font-bold uppercase">${text}</span>
        <hr class="flex-1 border-t border-yellow-400" />
      </div>
    `;
  }
}
// 註冊成 <recommended-title> 元件
customElements.define('recommended-title', RecommendedTitle);
