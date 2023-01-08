# 2023 아프리카TV 신입/경력 채용 사전과제

## 1. 배포 링크

<https://afreeca-assignments.netlify.app>

## 2. 사용 기술

- React
- axios
- Material-UI
- Emotion

<br />

## 3. 디렉토리 구조

```shell
src
   ├── App.css
   ├── App.js # entrypoint
   ├── App.test.js
   ├── components
   │   ├── BroadcastHeader.jsx
   │   ├── BroadcastInfo.jsx
   │   ├── BroadcastItem.jsx
   │   └── Thumbnail.jsx
   ├── enums
   │   └── index.js
   ├── index.css
   ├── index.js
   ├── pages
   │   └── main
   │       └── index.jsx
   ├── reportWebVitals.js
   ├── setupTests.js
   ├── style
   │   └── index.jsx
   └── utils
       └── api.js
```

<br />

## 4. 구현 기능

- 방송 리스트 출력
- 최신순, 시청자순 정렬 기능
- 리스트 새로고침 기능
- 방송 썸네일 마우스 오버시 방송 시작시간 및 탐방가능 여부 출력
- 방송 썸네일 클릭시 플레이어 화면 새창 열기
- BJ 썸네일 및 닉네임 클릭시 BJ 정보 페이지 새창 열기
- 35자 이상의 방송 제목은 마우스 오버시 툴팁 출력
- 시청 유저 수 출력
- 페이징 기능
