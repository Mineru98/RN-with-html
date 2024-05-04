// app.js

const express = require("express");
const app = express();
const port = 3000;

// EJS를 템플릿 엔진으로 설정
app.set("view engine", "ejs");

app.use(express.static("public"));

// 루트 경로에 대한 GET 요청 처리
app.get("/", (req, res) => {
  res.render("index", { title: "Hello World" });
});

// 서버 시작
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
