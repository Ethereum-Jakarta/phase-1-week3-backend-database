const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/router");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(router);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});