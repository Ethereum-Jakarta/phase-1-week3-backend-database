let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./address_book.db");

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phoneNumber TEXT UNIQUE NOT NULL,
        company TEXT,
        email TEXT UNIQUE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        groupName TEXT NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ContactId INTEGER,
        GroupId INTEGER,
        FOREIGN KEY (ContactId) REFERENCES Contact(id),
        FOREIGN KEY (GroupId) REFERENCES Groups(id)
    )`);
});

module.exports = db;