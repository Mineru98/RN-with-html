const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Hello World Home" });
});

app.get("/search", (req, res) => {
  res.render("search", { title: "Hello World Search" });
});

app.get("/likes", (req, res) => {
  res.render("likes", { title: "Hello World Like" });
});

app.get("/setting", (req, res) => {
  res.render("setting", { title: "Hello World Setting" });
});

// 서버 시작
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
