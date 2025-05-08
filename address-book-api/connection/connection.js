let sqlite3 = require("sqlite3").verbose();
let path = require("path");
let dbPath = path.resolve(__dirname, "../db/address_book_api.db");
let db = new sqlite3.Database(dbPath);


// async function createTables() {
//     try {
//       await db.exec(`
//       CREATE TABLE IF NOT EXISTS Contact(
//         id INTEGER PRIMARY KEY,
//         name TEXT NOT NULL,
//         phoneNumber TEXT NOT NULL UNIQUE,
//         company TEXT,
//         email TEXT NOT NULL UNIQUE
//       );
//       `);

//       await db.exec(`
//       CREATE TABLE IF NOT EXISTS Groups(
//         id INTEGER PRIMARY KEY,
//         groupName TEXT NOT NULL 
//       );
//       `);

//       await db.exec(`
//       CREATE TABLE IF NOT EXISTS GroupContact (
//         id INTEGER PRIMARY KEY,
//         ContactId INTEGER NOT NULL,
//         GroupId INTEGER NOT NULL,
//         FOREIGN KEY (ContactId) REFERENCES Contact (id),
//         FOREIGN KEY (GroupId) REFERENCES Groups (id)
//       );
//       `);

      
//     } catch (error) {
//       console.error('Gagal membuat tabel:', error.message);
//     }
     
//   }

//   async function createTables() {
//   try {
//     await db.exec(`
//       CREATE TABLE IF NOT EXISTS Contact (
//         id INTEGER PRIMARY KEY,
//         name TEXT NOT NULL,
//         phoneNumber TEXT NOT NULL UNIQUE,
//         company TEXT,
//         email TEXT NOT NULL UNIQUE
//       );
//     `);

//     await db.exec(`
//       CREATE TABLE IF NOT EXISTS Groups (
//         id INTEGER PRIMARY KEY,
//         groupName TEXT NOT NULL
//       );
//     `);

//     await db.exec(`
//       CREATE TABLE IF NOT EXISTS GroupContact (
//         id INTEGER PRIMARY KEY,
//         ContactId INTEGER NOT NULL,
//         GroupId INTEGER NOT NULL,
//         FOREIGN KEY (ContactId) REFERENCES Contact (id),
//         FOREIGN KEY (GroupId) REFERENCES Groups (id)
//       );
//     `);

//     console.log('Tabel berhasil dibuat.');
//   } catch (error) {
//     console.error('Gagal membuat tabel:', error.message);
//   }
// }




// createTables();

module.exports = db;