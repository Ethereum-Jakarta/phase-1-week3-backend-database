const sqlite3 = require('sqlite3') .verbose()
const db = new sqlite3.Database("./address_book.db");

async function createTables() {
	try {
		await db.exec(
				`CREATE TABLE IF NOT EXISTS Contact (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					name TEXT,
					phoneNumber TEXT UNIQUE,
					company TEXT,
					email TEXT UNIQUE
				)`
			);

		await db.exec(
			`CREATE TABLE IF NOT EXISTS GroupContact (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					contactId INTEGER FOREIGNKEY,
					groupId INTEGER FOREIGNKEY
				)`
			);

		await db.exec(
			`CREATE TABLE IF NOT EXISTS Groups (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					groupName TEXT NOT NULL
				)`
			);

		console.log('Tabel berhasil dibuat')
	} catch(err) {
		console.log(err)
	}
}

// createTables()

module.exports = db;