const express = require("express");
const app = express();

app.get("/musics", (req, res, next) => {
  res
    .status(200)
    .send([
      "Jesus",
      "I love to praise your name",
      "My Story",
      "Days of Elijah",
    ]);
});

app.listen(8000, () => {
  console.log("Server music running on 8000");
});
