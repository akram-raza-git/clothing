const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("server running Hello there");
});

app.listen(4000, () => {
  console.log("server running at port 4000");
});
