let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./address_book.db");

module.exports = db;
