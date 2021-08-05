const express = require("express");
const app = express();

app.get("/users", (req, res, next) => {
  res.send(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(3000, () => {
  console.log("Server user running on 3000");
});
