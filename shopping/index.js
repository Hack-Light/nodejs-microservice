const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World from Shopping" });
});

app.listen(3003, () => {
  console.log("Shpping is listening on port  3003");
});
