const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require("./db");

//import middlewares
const authMiddleware = require('./middlewares/authMiddleware')
const loggingMiddleware = require('./middlewares/loggingMiddleware')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware')
const corsMiddleware = require('./middlewares/corsMiddleware')
const rateLimitingMiddleware= require('./middlewares/rateLimitingMiddleware');

//initializing express app
const app = express();
const port = 3000;

//middleware setup
app.use(loggingMiddleware)
app.use(corsMiddleware)
app.use(rateLimitingMiddleware)
app.use(express.json())

//multer setup for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    }, 
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
})

const upload = multer({storage})

//apply authentication middleware to all routes
// app.use(authMiddleware)

//routes

//get all karyawan
app.get('/karyawan', (req, res) => {
    db.all(`SELECT * FROM Karyawan`, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message})
        } else {
            res.json(rows)
        }
    })
})

//add new karyawan
app.post('/karyawan', (req, res) => {
    const {nama, jabatan} = req.body;
    db.run(`INSERT INTO Karyawan (nama, jabatan) VALUES (?, ?)`, [nama, jabatan], function(err) {
        if (err) {
            res.status(500).json({ error: err.message});
        } else {
            res.status(200).json({id: this.lastID, nama, jabatan})
        }
    }
    )
})

//upload file
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({error: 'No file uploaded'});
    }
    res.status(200).json({ file: req.file })
})

//error handling middleware should be the last middleware used

//start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})