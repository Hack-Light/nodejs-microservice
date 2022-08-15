const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:3000"));
app.use("/shopping", proxy("http://localhost:3003"));

app.use("/", proxy("http://localhost:3001")); //products

app.listen(3005, () => {
  console.log("Gateway is listening on port 3005");
});
