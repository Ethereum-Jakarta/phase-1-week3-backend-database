const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database-multer.db');

//create karyawan table if not exists
db.serialize(() =>{
    db.run(`CREATE TABLE IF NOT EXISTS Karyawan (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama TEXT,
        jabatan TEXT
    )`);
});

module.exports = db;