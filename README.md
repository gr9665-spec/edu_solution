# 에듀솔루션 홈페이지 — 배포 가이드

## 폴더 구성
```
index.html      메인
about.html      에듀솔루션 소개
hakjeom.html    학점은행제 안내
courses.html    과정 안내
reviews.html    수강생 후기
contact.html    상담 신청 (이메일 폼)
style.css       공용 디자인
script.js       공용 스크립트
```

## 1. 깃허브 배포 (GitHub Pages)
1. https://github.com 가입 → 우측 상단 **+ → New repository**
2. 저장소 이름 입력 (예: `edusolution`) → Public 선택 → Create
3. **uploading an existing file** 클릭 → 이 폴더의 파일 8개를 전부 드래그해서 업로드 → Commit changes
4. 저장소 **Settings → Pages** 메뉴
5. Branch를 `main` / `(root)` 로 선택 → Save
6. 1~2분 뒤 `https://아이디.github.io/edusolution/` 접속 확인

## 2. 상담폼 이메일 연결 (Formspree, 무료)
1. https://formspree.io 가입 (상담 받을 이메일로)
2. **+ New Form** → 폼 이름 입력 → 생성
3. 발급된 주소 확인 (예: `https://formspree.io/f/abcd1234`)
4. `contact.html` 파일에서 `YOUR_FORM_ID` 부분을 발급받은 ID로 교체
5. 이후 폼이 제출되면 가입한 이메일로 신청 내용이 도착합니다
   - 무료 플랜: 월 50건 제출 가능

## 3. 카카오톡 버튼 연결
`contact.html`에서 `https://open.kakao.com/o/YOUR_LINK` 를
실제 오픈채팅 링크로 교체하세요.

## 4. 커스텀 도메인 (선택)
도메인 구매 후 (가비아 등) 저장소 Settings → Pages → Custom domain에
입력하고, 도메인 업체에서 안내하는 DNS 설정을 추가하면 됩니다.
