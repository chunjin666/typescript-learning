import express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("success");
});

app.listen(3000);
