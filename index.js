const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.json(--d)))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello");
  res.json("Hello");
});

app.post()


app.listen(4000, () => {
  console.log("Server Listen On Port : 4000");
});
