let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./address_book.db");

db.run(`PRAGMA foreign_keys = ON;`)

async function createTables() {
    try {
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Contact (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          phoneNumber TEXT NOT NULL UNIQUE,
          company TEXT,
          email TEXT NOT NULL UNIQUE
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS Groups (
          id INTEGER PRIMARY KEY,
          groupName TEXT NOT NULL
        );
      `);
  
      await db.exec(`
        CREATE TABLE IF NOT EXISTS GroupContact (
          id INTEGER PRIMARY KEY,
          ContactId INTEGER,
          GroupId INTEGER,
          FOREIGN KEY (ContactId) REFERENCES Contact(id) ON UPDATE CASCADE ON DELETE CASCADE,
          FOREIGN KEY (GroupId) REFERENCES Groups(id) ON UPDATE CASCADE ON DELETE CASCADE
        );
      `);
  
      console.log('Tabel berhasil dibuat.');
    } catch (error) {
      console.error('Gagal membuat tabel:', error.message);
    }
  }
  


module.exports = db;