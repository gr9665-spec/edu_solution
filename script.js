// 모바일 메뉴
const menuBtn = document.querySelector('.menu-btn');
const gnb = document.querySelector('.gnb');
if (menuBtn && gnb) {
  menuBtn.addEventListener('click', () => gnb.classList.toggle('open'));
}

// 진도바 애니메이션 (메인 히어로)
const bars = document.querySelectorAll('.bar i[data-w]');
if (bars.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w;
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => io.observe(b));
}
