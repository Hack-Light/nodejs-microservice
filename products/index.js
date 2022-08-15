const express = require("express");
const app = express();


app.use(express.json());

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World from Products" });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
