const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let db;

async function initDatabase() {
    db = await open({
        filename: 'address_book.db',
        driver: sqlite3.Database
    });
}

async function createTables() {
    try {
        await db.exec(`
      CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY,
        name TEXT,
        phoneNumber INTEGER UNIQUE,
        company TEXT,
        email TEXT UNIQUE
      );
    `);

        await db.exec(`
      CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY,
        groupName TEXT
      );
    `);

        await db.exec(`
      CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY,
        ContactId INTEGER,
        GroupId INTEGER,
        FOREIGN KEY (ContactId) REFERENCES Contact (id),
        FOREIGN KEY (GroupId) REFERENCES Groups (id)
      );
    `);
        console.log('Tabel berhasil dibuat.');

    } catch (error) {
        console.error('Gagal membuat tabel:', error.message);
    }
}

async function closeDatabase() {
    await db.close();
    console.log('Koneksi ditutup.');
}

async function main() {
    await initDatabase();
    await createTables();
    await closeDatabase();
}

main();