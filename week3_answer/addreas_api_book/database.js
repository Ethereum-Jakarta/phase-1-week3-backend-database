const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./addreas_book.db", (err) => {
  if (err) {
    console.log("Gagal konek DB:", err.message);
  } else {
    console.log("SQLite connected");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS contact_group (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER,
    group_id INTEGER
  )
`);

module.exports = db;
