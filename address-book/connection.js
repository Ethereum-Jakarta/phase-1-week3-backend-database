const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./address_book.db");

db.run("PRAGMA foreign_keys = ON;");

module.exports = db;