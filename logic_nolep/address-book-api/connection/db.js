const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, '../address-book.db'), (err) => {
    if (err) {
        console.error('Gagal koneksi ke database: ' + err.message);
    } else {
        console.log('Koneksi database berhasil');
    }
})

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS contact (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phoneNumber INTEGER UNIQUE,
        company TEXT,
        email TEXT UNIQUE
        )
        `, (err) => {
        if (err) {
            console.error('Gagal membuat tabel contact: ' + err.message);
        } else {
            console.log('Tabel contact berhasil dibuat');
        }
    });

    db.run(`
    CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    groupName TEXT
    )
    `, (err) => {
        if (err) {
            console.error('Gagal membuat tabel groups' + err.message);
        } else {
            console.log('Tabel groups berhasil dibuat');
        }
    });

    db.run(`
    CREATE TABLE IF NOT EXISTS contactGroup (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contactId INTEGER,
    groupId INTEGER,
    FOREIGN KEY (contactId) REFERENCES contact (id),
    FOREIGN KEY (groupId) REFERENCES groups (id)
    )
    `, (err) => {
        if (err) {
            console.error('Gagal membuat tabel contactGroup' + err.message);
        } else {
            console.log('Tabel contactGroup berhasil dibuat');
        }
    });

});

module.exports = db;





