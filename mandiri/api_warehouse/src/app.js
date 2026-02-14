const express = require('express');
const db = require("../db/database_warehouse.js");
const cors = require('cors')

const app = express();
const port = 3000;

//middleware
app.use(express.json())
app.use(cors())

app.get('/product', (req, res) => {
    db.query('SELECT * FROM product ORDER BY product_id ASC')
        .then(result => {
            // res.send("Produk berhasil diakses!")
            res.json(result.rows)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: "Gagal mengambil data product" })
        })
})

app.post('/product', (req, res) => {
    const { id, name, category, price } = req.body;
    db.query('INSERT INTO product(product_id, product_name,category,price) VALUES($1, $2, $3, $4) RETURNING *', [id, name, category, price], (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
        return res.status(200).json(result.rows[0]);
        // return res.status(201).json({ message: "Produk berhasil ditambahkan" });
    })
})

app.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, price } = req.body;

    db.query('UPDATE product SET product_name = $1, category = $2, price = $3 WHERE product_id = $4 RETURNING *', [name, category, price, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message })
        if (result.rowCount === 0) return res.status(404).json({ error: "ID tidak ditemukan" });
        return res.status(200).json(result.rows[0])
    })
})

app.delete('/product/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM product WHERE product_id = $1', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.rowCount === 0) return res.status(404).json({ error: "Data ID tidak ditemukan" });
        return res.status(200).json({ message: "Data berhasil dihapus" })
    })
})

//jalanksan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}🚀🚀🚀`)
})