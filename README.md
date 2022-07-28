# TODO LIST

![화면 예시](./public/ex.png)

---

#### 프로젝트 기간
220722-220728

---

#### 프로젝트 설명
- 나만의 ToDo 리스트를 만들고 관리합니다.
- ToDo 리스트를 추가 하고 삭제할 수 있습니다.
- 달성한 Todo는 버튼을 눌러 완료 상태로 만들 수 있습니다.

---

#### 요구 사항 분석
1. 제목과 내용을 입력하고, `추가하기` 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성.

2. Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링 한다. 

3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현.
        
4. Layout의 최대 넓이는 **1200px**, 최소 넓이는 **800px**로 제한하고, 전체 화면의 가운데로 정렬.
![](https://velog.velcdn.com/images/hahbr88/post/d201b50e-122e-4fdc-ac58-c17444b9ea35/image.png)

---

#### 사용 기술

<div align=center>
<a href="https://developer.mozilla.org/ko/docs/Web/HTML">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
</a>
<a href="https://developer.mozilla.org/ko/docs/Web/CSS">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
</a>
<a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</a>
<a href="https://ko.reactjs.org/docs/getting-started.html">
  <img src="https://img.shields.io/badge/React-282c34?style=for-the-badge&logo=react&logoColor=61dafb">
</a>
<br>
</div>

---

#### 디렉토리 구조
```bash
├── node_modules
├── public
│   ├── ex.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
│
├── src
│   ├── components
│   │   ├── form
│   │   │     ├── Form.jsx
│   │   │     └── style.css
│   │   ├── header
│   │   │     ├── Header.jsx
│   │   │     └── style.css
│   │   ├── layout
│   │   │     ├── Layout.jsx
│   │   │     └── style.css
│   │   ├── list
│   │   │     ├── List.jsx
│   │   │     └── style.css
│   │   └── todo
│   │         ├── Todo.jsx
│   │         └── style.css
│   ├── pages
│   │     └── TodoList.jsx
│   │
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│ 
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
``` 
