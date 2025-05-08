const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address_book.db');

async function createTables() {
  try {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY,
        ContactId INTEGER NOT NULL,
        GroupId INTEGER NOT NULL,
        FOREIGN KEY (ContactId) REFERENCES Contact (id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (GroupId) REFERENCES Groups (id) ON UPDATE CASCADE ON DELETE CASCADE
      );
    `);
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
  } catch (error) {
    console.error('Gagal membuat tabel:', error.message);
  }
}

const main = async () => {
  try {
    await createTables();
  } catch (error) {
    console.error(error.message);
  }
};

main();

module.exports = db;
