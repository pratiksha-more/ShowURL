const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello");
  res.json("Hello");
});

app.post();

app.listen(4000, () => {
  console.log("Server Listen On Port : 4000");
});
