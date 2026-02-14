const { Client } = require('pg')

//Konfigurasi koneksi ke database postgresql

const client = new Client({
    user: 'postgres', //masukan user postgresql
    host: '127.0.0.1', //ip server postgresql
    database: 'db_absensi', //nama database
    password: 'buku2708', //password user
    port: '5432' //default  port postgresql
})

client.connect()
    .then(() => {
        console.log('Terhubung ke PostgreSQL');

        //membuat tabel jika belum ada
        return client.query(`
            CREATE TABLE IF NOT EXISTS absenses(
                id SERIAL PRIMARY KEY,
                name TEXT UNIQUE
            )
        `)
    })
    .then(() => {
        console.log('Tabel absenses siap digunakan')
    })
    .catch((err) => {
        console.error('Error:', err)
    })

module.exports = client