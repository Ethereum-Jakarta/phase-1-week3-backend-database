const express = require('express') //import express module
const app = express() //inisialisasi express
const db = require("../db/database.js")
const port = 3000; //port server akan berjalan

//middleware
app.use(express.json()) //Middleware untuk parsing json

//definisikan rute kalian disini

//GET untuk mendapatkan semua nama absen
app.get('/absenses', (req, res) => {
    db.query('SELECT * FROM absenses')
        .then(result => {
            res.json(result.rows)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: "Gagal mengambil data absenses" })
        })
})

app.post('/absenses', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Nama harus diisi" });

    db.query(`INSERT INTO absenses(name) VALUES($1) RETURNING *`, [name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(result.rows[0])
    })
})

app.put('/absenses/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    db.query("UPDATE absenses SET name = $1 WHERE id = $2 RETURNING *", [name, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.rowCount === 0) return res.status(404).json({ error: "ID tidak ditemukan" });
        res.json(result.rows[0])
    })
})

app.delete('/absenses/:id', (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM absenses WHERE id = $1 RETURNING *", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.rowCount === 0) return res.status(404).json({ error: "ID tidak ditemukan" })
        res.json({ message: "Data berhasil dihapus" })
    })
})

//jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🚀🚀🚀`)
})
