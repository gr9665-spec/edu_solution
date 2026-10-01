// 후기 카드 → 카톡 상담 예시 보기
// - data-chat="키"   : 아래 REVIEW_CHATS 의 재구성 예시 대화를 카톡 화면처럼 보여줍니다.
// - data-kakao="경로" : 실제 카톡 캡처 이미지(쉼표로 여러 장)를 보여줍니다. 실제 캡처가 생기면 이걸로 교체하세요.
// 대화 형식: { from: 'me'(정민쌤) | 'them'(수강생), t: '시간', text: '내용' } / { date: '구분선 문구' }

const REVIEW_CHATS = {
  yoon: {
    name: '윤○아',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 9:40', text: '안녕하세요 쌤! 31살 마케팅 회사 다니고 있어요.\n전문대 경영과 졸업했는데 경영대학원에 가고 싶어서요.\n전문대 졸업으로는 대학원 지원이 안 되죠?ㅠ' },
      { from: 'me', t: '오후 9:47', text: '안녕하세요 윤○아님, 정민쌤입니다 😊\n네, 대학원은 학사학위가 있어야 지원할 수 있어요.\n\n그래서 학점은행제로 학사학위를 먼저 만드시면 돼요!\n학점은행제 학사도 대학원 지원 자격으로 인정됩니다.' },
      { from: 'them', t: '오후 9:49', text: '오 그럼 처음부터 140학점을 다 들어야 하나요?' },
      { from: 'me', t: '오후 9:55', text: '아니요! 전문대에서 받으신 학점을 그대로 가져올 수 있어요.\n\n· 학사 기준 : 140학점\n· 전문대 학점 인정 : 약 80학점\n· 남은 학점 : 약 60학점\n\n경영학 전공으로 이어서 하시면 전공 학점도 잘 맞아요 📋' },
      { from: 'them', t: '오후 9:58', text: '생각보다 훨씬 적네요!!\n근데 대학원 서류 볼 때 학점도 보잖아요… 학점은행제 성적도 중요한가요?' },
      { from: 'me', t: '오후 10:04', text: '맞아요, 서류에서 성적도 같이 보기 때문에 중요해요!\n\n그래서 수업마다 과제 작성 가이드랑 시험 대비 핵심 정리 자료를 같이 드려요.\n자료 보면서 준비하시면 직장 다니면서도 높은 성적 충분히 받으실 수 있어요 💪' },
      { from: 'them', t: '오후 10:06', text: '와 그런 것까지 챙겨주시는구나…\n목표는 내후년 전기 모집이에요!' },
      { from: 'me', t: '오후 10:15', text: '좋아요! 그 모집 일정 기준으로 거꾸로 짜볼게요 📋\n\n· 1~2학기 : 남은 학점 이수 (학기당 무리 없이)\n· 3학기 : 마무리 + 학위 신청\n· 이후 : 학사학위 받고 대학원 원서 접수\n\n원서 접수 일정이랑 학위 수여 시기가 안 꼬이게 맞춰드릴게요!' },
      { date: '학기 중' },
      { from: 'them', t: '오후 8:12', text: '쌤 이번 학기 성적 나왔어요! 거의 다 A+이에요 🥹\n주신 자료 없었으면 과제 쓰다가 포기했을 듯ㅋㅋ' },
      { from: 'me', t: '오후 8:20', text: '와 윤○아님 너무 잘하셨어요!! 👏👏\n이 성적이면 서류에서도 충분히 자신 있게 내셔도 돼요.\n다음 학기 자료도 미리 준비해 둘게요!' }
    ]
  },

  seo: {
    name: '서○호',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 7:15', text: '안녕하세요. 26살입니다.\n지방 4년제 1학년 마치고 군대 다녀왔는데, 이번에 서울 쪽 4년제로 편입하고 싶어요.\n지금 학교로 돌아가서 2학년 마쳐야 하나요?' },
      { from: 'me', t: '오후 7:22', text: '안녕하세요 서○호님, 정민쌤입니다!\n꼭 학교로 돌아가지 않으셔도 돼요 😊\n\n학점은행제로 학점을 채워서 일반편입(3학년)에 지원하는 방법이 있어요.\n1학년 때 받으신 학점도 학점은행제로 가져올 수 있고요!' },
      { from: 'them', t: '오후 7:25', text: '오 그럼 학점은 몇 학점 필요한가요?' },
      { from: 'me', t: '오후 7:33', text: '일반편입에 필요한 학점 기준은 학교마다 달라요.\n그래서 목표 학교부터 정하고, 그 학교 모집요강 기준에 맞춰 설계하는 게 제일 정확해요.\n\n가고 싶은 학교 몇 곳 알려주시면 기준 학점이랑 전형 방법 정리해서 드릴게요 📋' },
      { from: 'them', t: '오후 7:40', text: '[목표 학교 3곳 보냄]\n편입 영어도 준비해야 해서 학점이랑 같이 할 수 있을지 걱정이에요' },
      { from: 'me', t: '오후 7:52', text: '정리해봤어요!\n\n· 학점 : 1년 안에 기준 학점 채우기 (학기당 21학점)\n· 영어 : 학점 일정 가벼운 방학 기간에 집중\n· 시험 전 마지막 학기 : 학점 최소로 → 영어 올인\n\n학점은 제가 일정 관리하고 과제·시험 자료도 드릴 테니까\n서○호님은 영어에만 집중하시면 돼요 💪' },
      { from: 'them', t: '오후 7:55', text: '와 이렇게 나눠주시니까 할 만하겠는데요?ㅋㅋ\n학점 걱정이 제일 컸는데 좀 풀리네요' },
      { date: '원서 접수 전' },
      { from: 'me', t: '오전 11:10', text: '서○호님~ 이번 학기 성적 인정되면 목표 학교 기준 학점 다 채워지세요!\n학점인정 신청이랑 편입 원서에 낼 성적증명서 발급 순서 정리해서 보내드려요 📎' },
      { from: 'them', t: '오후 1:30', text: '감사합니다 쌤!! 이제 진짜 영어만 남았네요 🔥' }
    ]
  },

  park: {
    name: '박○준',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 8:03', text: '안녕하세요. 41살 직장인입니다.\n예전에 대학 2학년 1학기까지 다니고 그만뒀는데요,\n회사에서 승진하려면 학사가 필요해서요.\n완전 처음부터 해야 되나요?' },
      { from: 'me', t: '오후 8:11', text: '안녕하세요 박○준님, 정민쌤입니다!\n처음부터 하실 필요 없어요 😊\n\n중퇴하셨어도 그때 이수하신 학점은 학점은행제에서 인정받을 수 있어요.\n오래전 학점이라도 성적증명서만 발급되면 됩니다!' },
      { from: 'them', t: '오후 8:14', text: '10년도 훨씬 넘었는데도요?\n학점이 살아있을 거라고는 생각도 못 했네요' },
      { from: 'me', t: '오후 8:19', text: '네! 다만 새로 정하는 전공이랑 예전 과목이 얼마나 겹치느냐에 따라 인정 범위가 달라져요.\n\n예전 전공이 경영학이셨으니까 학사도 경영학으로 맞추시면 전공학점까지 최대한 살릴 수 있어요.\n학교 홈페이지에서 성적증명서 한 장만 발급해서 보내주시겠어요?' },
      { from: 'them', t: '오후 8:52', text: '[사진] 성적증명서 보내드립니다!' },
      { from: 'me', t: '오후 9:30', text: '확인했어요! 정리해드리면\n\n· 전적대 인정 : 약 45학점\n· 학사 기준 : 140학점 (전공 60 / 교양 30 / 일반 50)\n· 남은 학점 : 약 95학점\n\n여기에 자격증 학점까지 더하면 처음 생각하신 것보다 두 학기 정도 빨리 끝내실 수 있어요 📋' },
      { from: 'them', t: '오후 9:33', text: '와… 이렇게 숫자로 보니까 확 와닿네요.\n처음부터 다시 해야 되는 줄 알고 몇 년을 미뤘는데 ㅎㅎ' },
      { date: '학위 신청 시기' },
      { from: 'me', t: '오전 11:02', text: '박○준님~ 이번 학기 성적까지 인정되면 학위 요건이 다 채워져요!\n학위 신청 기간 열리면 신청 순서랑 필요 서류 바로 보내드릴게요 🎓' },
      { from: 'them', t: '오후 12:40', text: '드디어네요ㅎㅎ 쌤 덕분에 진짜 빨리 끝났습니다.\n회사에도 이번에 바로 제출하려고요. 감사합니다!' }
    ]
  },

  jung: {
    name: '정○수',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 6:35', text: '안녕하세요. 공장에서 설비 일 하는 29살입니다.\n전기산업기사 따고 싶은데 고졸이라 응시자격이 안 된다고 해서 거의 포기하고 있었어요.\n학점은행제로 방법이 있나요?' },
      { from: 'me', t: '오후 6:42', text: '안녕하세요 정○수님, 정민쌤입니다!\n네, 방법 있어요 😊\n\n학점은행제에서 전기 관련 전공으로 학습자등록을 하고\n41학점 이상 인정받으시면 산업기사 응시자격이 생겨요.' },
      { from: 'them', t: '오후 6:45', text: '41학점이요? 학위를 다 따야 되는 게 아니고요?' },
      { from: 'me', t: '오후 6:51', text: '네! 학위까지 다 받으실 필요 없이 41학점만 맞추시면 돼요.\n\n핵심은 학습자등록 전공을 관련 전공으로 해두는 거예요.\n과목은 그 안에서 시험 일정에 맞춰 효율적으로 고르시면 돼요.' },
      { from: 'them', t: '오후 6:54', text: '그럼 대충 얼마나 걸릴까요?\n내년 시험 보고 싶은데 시간이 될지 모르겠네요' },
      { from: 'me', t: '오후 7:10', text: '내년 시험 원서접수 일정 기준으로 거꾸로 계산해봤어요 📋\n\n· 1학기 : 21학점\n· 2학기 : 21학점\n→ 42학점으로 41학점 기준 충족\n\n필요한 학점만 딱 맞춰서 듣는 거라 시간 낭비 없이 준비하실 수 있어요!' },
      { from: 'them', t: '오후 7:13', text: '와 이렇게 계산해서 주시니까 진짜 할 수 있을 것 같네요.\n괜히 혼자 포기하고 있었네ㅋㅋ' },
      { date: '원서접수 전' },
      { from: 'me', t: '오전 10:20', text: '정○수님~ 이번 학기 성적 인정되면 41학점 넘으세요!\n학점인정 신청하고 응시자격 서류 내는 순서 정리해서 보내드려요 📎' },
      { from: 'them', t: '오후 12:15', text: '감사합니다 쌤!! 이제 필기 공부만 열심히 하면 되겠네요 🔥' }
    ]
  },

  choi: {
    name: '최○린',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 11:20', text: '안녕하세요 27살 회사원이에요.\n간호학과 대졸자 전형 준비하려고 하는데요,\n전적대 학점이 2점대 후반이라 너무 걱정돼요ㅠㅠ' },
      { from: 'me', t: '오후 11:28', text: '안녕하세요 최○린님, 정민쌤입니다!\n간호학과 대졸자 전형은 학교마다 차이는 있지만 이전 학교 성적을 보는 곳이 많아요.\n그래서 지금 성적 그대로 지원하시면 솔직히 쉽지 않아요.' },
      { from: 'them', t: '오후 11:30', text: '역시 그렇죠…\n그럼 방법이 없는 걸까요?' },
      { from: 'me', t: '오후 11:37', text: '방법 있어요! 😊\n학점은행제로 새 학사학위를 받으시면 그 학위 성적으로 지원할 수 있어요.\n\n학점은행제 수업은 과제·시험 관리만 잘하시면 높은 성적을 받기 좋아서\n전적대 성적의 약점을 보완하는 방법으로 많이 준비하세요.' },
      { from: 'them', t: '오후 11:40', text: '아 학위를 새로 만든다는 생각은 아예 못 했어요!\n그럼 어느 학교를 목표로 하면 될까요?' },
      { from: 'me', t: '오후 11:48', text: '목표 학교부터 정하고 거꾸로 설계하는 게 맞아요.\n\n학교마다 성적 반영 방식이랑 지원자격이 달라서\n관심 있는 학교 3곳 정도 말씀해주시면 최신 모집요강 기준으로 비교표 만들어 드릴게요 📋\n\n그 학교에 맞춰서 학기별 계획을 짜면 막연한 준비가 아니라 구체적인 일정이 돼요!' },
      { from: 'them', t: '오후 11:52', text: '네! 내일 바로 정리해서 보내드릴게요.\n막막했는데 뭘 해야 하는지 보이니까 마음이 훨씬 편해졌어요 ㅎㅎ' },
      { date: '학기 중' },
      { from: 'them', t: '오후 8:44', text: '쌤 이번 학기 성적 나왔는데 전 과목 A+이에요!! 🥹' },
      { from: 'me', t: '오후 8:50', text: '와 최○린님 너무 잘하셨어요!! 👏👏\n이 페이스면 계획대로 가고 있어요. 다음 학기도 과제 일정 미리 정리해서 보내드릴게요!' }
    ]
  },

  han: {
    name: '한○민',
    msgs: [
      { date: '첫 상담' },
      { from: 'them', t: '오후 2:05', text: '안녕하세요. 38살이고 고졸입니다.\n광고 보면 몇 개월 만에 학위 딴다는 데도 있던데 그게 진짜 되나요?\n솔직히 상담하면 등록하라고 할까 봐 좀 망설여졌어요.' },
      { from: 'me', t: '오후 2:14', text: '안녕하세요 한○민님, 정민쌤입니다.\n솔직하게 말씀드릴게요.\n\n지금 인정받을 학점이나 자격증이 하나도 없는 상태라면\n몇 개월 만에 전문학사 학위는 불가능해요.' },
      { from: 'them', t: '오후 2:16', text: '아… 역시 안 되는 거였군요' },
      { from: 'me', t: '오후 2:23', text: '전문학사는 80학점이 필요한데,\n학점은행제는 1년에 최대 42학점까지만 인정받을 수 있어요.\n\n수업만으로 하면 2년 가까이 걸리고,\n자격증 학점이나 독학사를 같이 활용하면 기간을 꽤 줄일 수 있어요.\n\n무리해서 빨리 하는 것보다 끝까지 가실 수 있는 계획이 더 중요해요!' },
      { from: 'them', t: '오후 2:27', text: '안 되는 걸 안 된다고 말해주시니까 오히려 믿음이 가네요 ㅎㅎ\n그럼 저는 어떤 순서로 하면 될까요?' },
      { from: 'me', t: '오후 2:40', text: '한○민님 일정 기준으로 짜봤어요 📋\n\n· 1학기 : 온라인 수업 + 자격증 준비\n· 2학기 : 온라인 수업 + 자격증 학점 인정\n· 이후 : 남은 학점 마무리 → 학위 신청\n\n등록은 천천히 생각해보셔도 괜찮아요. 궁금하신 거 있으면 언제든 물어보세요!' },
      { date: '마지막 학기' },
      { from: 'them', t: '오후 9:10', text: '쌤 저 이번이 마지막 학기네요!\n처음에 광고 상담인 줄 알고 경계했던 게 엊그제 같은데 ㅋㅋ' },
      { from: 'me', t: '오후 9:16', text: 'ㅎㅎ 벌써 마지막 학기라니 저도 뿌듯해요!\n학위 신청 기간 열리면 바로 알려드릴게요. 끝까지 같이 가요 💪' }
    ]
  }
};

(() => {
  const cards = document.querySelectorAll('.review[data-chat], .review[data-kakao]');
  if (!cards.length) return;

  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const modal = document.createElement('div');
  modal.className = 'kakao-modal';
  modal.innerHTML = '<div class="kakao-box" role="dialog" aria-modal="true">'
    + '<div class="kakao-top"><b></b><button type="button" class="kakao-close" aria-label="닫기">✕</button></div>'
    + '<div class="kakao-body"></div>'
    + '<p class="kakao-note"></p></div>';
  document.body.appendChild(modal);
  const title = modal.querySelector('.kakao-top b');
  const body = modal.querySelector('.kakao-body');
  const note = modal.querySelector('.kakao-note');

  const renderChat = chat => chat.msgs.map(m => {
    if (m.date) return '<div class="kk-date">' + esc(m.date) + '</div>';
    const text = esc(m.text).replace(/\n/g, '<br>');
    if (m.from === 'me') {
      return '<div class="kk-row me"><span class="kk-time">' + esc(m.t) + '</span><div class="kk-bubble">' + text + '</div></div>';
    }
    return '<div class="kk-row them"><div class="kk-avatar"></div><div class="kk-col"><div class="kk-name">' + esc(chat.name) + '</div>'
      + '<div class="kk-line"><div class="kk-bubble">' + text + '</div><span class="kk-time">' + esc(m.t) + '</span></div></div></div>';
  }).join('');

  const open = card => {
    const chat = card.dataset.chat && REVIEW_CHATS[card.dataset.chat];
    if (card.dataset.kakao) {
      const who = card.querySelector('.who b');
      title.textContent = (who ? who.textContent : '') + ' 카톡 후기';
      body.innerHTML = card.dataset.kakao.split(',').map(s => s.trim()).filter(Boolean)
        .map(src => '<img src="' + esc(src) + '" alt="카톡 후기 캡처" loading="lazy">').join('');
      note.textContent = '수강생 동의를 받아 개인정보를 가린 실제 대화 캡처입니다.';
    } else if (chat) {
      title.textContent = chat.name + ' 님과의 상담';
      body.innerHTML = renderChat(chat);
      note.textContent = '※ 실제 상담 흐름을 바탕으로 재구성한 예시 대화입니다.';
    } else return;
    body.scrollTop = 0;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };

  cards.forEach(card => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'review-more';
    btn.textContent = card.dataset.kakao ? '💬 카톡 후기 자세히 보기' : '💬 이런 상담을 했어요';
    btn.addEventListener('click', () => open(card));
    card.appendChild(btn);
  });

  modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.kakao-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
