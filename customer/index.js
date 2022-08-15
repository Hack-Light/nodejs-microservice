const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World from Customers" });
});

app.listen(3000, () => {
  console.log("Customer is listening on port  3000");
});
