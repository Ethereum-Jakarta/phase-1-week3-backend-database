const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("address_book.db", (err) => {
    if (err) {
        console.error("Gagal koneksi ke SQLite:", err.message);
    } else {
        console.log("Berhasil koneksi ke SQLite!")
    }
});

//membuat tabel
async function createTables() {
    try {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS Contact (
                IDContact INTEGER PRIMARY KEY AUTOINCREMENT,
                Nama TEXT NOT NULL,
                PhoneNumber INTEGER UNIQUE,
                Company TEXT,
                Email TEXT UNIQUE
            );
        `);

        await db.exec(`
            CREATE TABLE IF NOT EXISTS Groups (
                IDGroup INTEGER PRIMARY KEY AUTOINCREMENT,
                GroupName TEXT
            );
        `);

        await db.exec(`
            CREATE TABLE IF NOT EXISTS ContactGroups (
                IDGroupContact INTEGER PRIMARY KEY AUTOINCREMENT,
                IDContact INTEGER,
                IDGroup INTEGER,
                FOREIGN KEY (IDContact) REFERENCES Contact (IDContact),
                FOREIGN KEY (IDGroup) REFERENCES Groups (IDGroup)
            );
        `);
        // console.log("Tabel berhasil dibuat")
    } catch (error) {
        console.error("Gagal membuat tabel:", error.message)
    }
}

module.exports = {db, createTables};