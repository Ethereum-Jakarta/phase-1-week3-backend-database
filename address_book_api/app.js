const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const router = require("./router/router")
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(router)
app.use(bodyParser.json())

module.exports = app;