const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use(express.json()); //middleware untuk parsing json

//definisikan route api kalian disini

//jalankan server
app.listen(port,  () => {
    console.log(`Server berjalan di port ${port} 🚀🚀🚀`)
})