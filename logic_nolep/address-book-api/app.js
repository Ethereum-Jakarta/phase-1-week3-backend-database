const express = require("express");
const router = require("./router/router")
const {createTables} = require("./connection/connection")

const app = express();
const port = 3000;

createTables()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("Hello world");
});

app.use(router)

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`)
})
