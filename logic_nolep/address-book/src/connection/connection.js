const sqlite = require("sqlite");
const sqlite3 = require("sqlite3").verbose();

async function conn() {
  return sqlite.open({
    filename: "./address_book.db",
    driver: sqlite3.Database,
  });
}

// async function createTables() {
//   const db = await conn();
//   try {
//     await db.exec(`
//         CREATE TABLE IF NOT EXISTS Contact (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             phoneNumber TEXT UNIQUE,
//             company TEXT,
//             email TEXT UNIQUE
//         )
//     `);

//     await db.exec(`
//         CREATE TABLE IF NOT EXISTS GroupContact (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             ContactId INTEGER,
//             GroupId INTEGER,
//             FOREIGN KEY (ContactId) REFERENCES Contact(id),
//             FOREIGN KEY (GroupId) REFERENCES Groups(id)
//         )
//     `);

//     await db.exec(`
//         CREATE TABLE IF NOT EXISTS Groups (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             groupName TEXT NOT NULL
//         )
//     `);
//     console.log("success!");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     await db.close();
//   }
// }

// createTables();

module.exports = conn;