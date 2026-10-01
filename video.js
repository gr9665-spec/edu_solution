// 유튜브 영상
// - .yt-lite[data-id] : 썸네일만 먼저 보여주고, 누르면 그 자리에서 재생 (첫 화면 속도 유지)
// - a[data-yt]        : 누르면 팝업으로 재생 (자바스크립트가 꺼져 있으면 유튜브로 이동)
(() => {
  const embed = id => 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
  const track = (id, where) => { if (typeof gtag === 'function') gtag('event', 'video_play', { video_id: id, location: where }); };
  const iframe = (id, title) => {
    const f = document.createElement('iframe');
    f.src = embed(id);
    f.title = title || '학점은행제 정민쌤 영상';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    return f;
  };

  document.querySelectorAll('.yt-lite[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.replaceWith(Object.assign(iframe(btn.dataset.id, btn.getAttribute('aria-label')), { className: 'yt-frame' }));
      track(btn.dataset.id, 'inline');
    });
  });

  const links = document.querySelectorAll('a[data-yt]');
  if (!links.length) return;
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = '<div class="video-box" role="dialog" aria-modal="true" aria-label="영상">'
    + '<button type="button" class="video-close" aria-label="닫기">✕</button><div class="video-slot"></div></div>';
  document.body.appendChild(modal);
  const slot = modal.querySelector('.video-slot');
  const close = () => { modal.classList.remove('open'); slot.innerHTML = ''; document.body.style.overflow = ''; };

  links.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    slot.innerHTML = '';
    slot.appendChild(iframe(a.dataset.yt, a.dataset.title));
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    track(a.dataset.yt, 'popup');
  }));
  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.video-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
})();
