console.log('carousel.js loaded');
export default function initCarousel(containerSelector, imageUrls = []) {
     console.log('initCarousel() 開始執行');
  const container = document.querySelector(containerSelector);
  if (!container || imageUrls.length === 0) return;

  // 建立 DOM
  const wrapper = document.createElement('div');
  wrapper.className = 'relative w-full overflow-hidden h-64';

  const track = document.createElement('div');
  track.className = 'flex transition-transform duration-500 ease-in-out';

  imageUrls.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'w-full flex-shrink-0';
    track.appendChild(img);
  });
  wrapper.appendChild(track);

  // Prev.Next
  const btnPrev = document.createElement('button');
  const btnNext = document.createElement('button');
  [btnPrev.textContent, btnNext.textContent] = ['‹', '›'];
  const btnClasses = 'absolute top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-100 text-white p-2 rounded';
  btnPrev.className = `${btnClasses} left-2`;
  btnNext.className = `${btnClasses} right-2`;

  wrapper.append(btnPrev, btnNext);
  container.appendChild(wrapper);

  // 行為邏輯
  let idx = 0;
  const update = () => {
    track.style.transform = `translateX(${-idx * 100}%)`;
  };
  btnPrev.addEventListener('click', () => {
    idx = (idx - 1 + imageUrls.length) % imageUrls.length;
    update();
  });
  btnNext.addEventListener('click', () => {
    idx = (idx + 1) % imageUrls.length;
    update();
  });
}
