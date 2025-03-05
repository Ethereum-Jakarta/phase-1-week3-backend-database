const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error("Error saat membuka database:", err.message);
    } else {
        console.log("Database berhasil dibuat/dibuka.");
    }
});

// Gunakan serialize() agar perintah dieksekusi berurutan
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            groupName TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error("Gagal membuat tabel:", err.message);
        } else {
            console.log("Tabel Groups siap digunakan.");
        }
    });
});

module.exports = db;
