const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const router = require("./router/router")
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(router)
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server is running in port: " + port);
});