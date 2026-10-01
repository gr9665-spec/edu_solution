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

// 빠른 상담 버튼 (모바일: 하단 고정 바 / PC: 우측 하단 동그라미)
const KAKAO_URL = 'https://open.kakao.com/o/sZ5gefQi';
const ICON_CHAT = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7l-1 3.6c-.1.4.3.7.6.5l4.3-2.8c.5.1.9.1 1.4.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"/></svg>';
const ICON_PEN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 17.3V20h2.7l8-8-2.7-2.7-8 8zM19.7 7a1 1 0 0 0 0-1.4l-1.3-1.3a1 1 0 0 0-1.4 0l-1.4 1.4 2.7 2.7L19.7 7zM12 20h8v-2h-8z"/></svg>';
const quick = document.createElement('div');
quick.className = 'quick-cta';
quick.innerHTML = '<a class="qc-kakao" href="' + KAKAO_URL + '" target="_blank" rel="noopener" aria-label="카톡 상담">'
  + '<span class="qc-ico">' + ICON_CHAT + '</span><span class="qc-txt">카톡 상담</span></a>'
  + '<a class="qc-apply" href="contact.html" aria-label="무료 상담 신청">'
  + '<span class="qc-ico">' + ICON_PEN + '</span><span class="qc-txt">무료 상담 신청</span></a>';
document.body.appendChild(quick);
