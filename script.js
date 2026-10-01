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

// 모바일 하단 고정 상담 버튼
const KAKAO_URL = 'https://open.kakao.com/o/sZ5gefQi';
const ctaBar = document.createElement('div');
ctaBar.className = 'mobile-cta';
ctaBar.innerHTML = '<a class="mc-kakao" href="' + KAKAO_URL + '" target="_blank" rel="noopener">💬 카톡 상담</a>'
  + '<a class="mc-apply" href="contact.html">무료 상담 신청</a>';
document.body.appendChild(ctaBar);
