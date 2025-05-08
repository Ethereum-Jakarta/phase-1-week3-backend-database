const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./address_book_api.db");
module.exports = db;

async function createTables() {
  try {
    console.log("Starting table creation...");

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Contact(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phoneNumber TEXT NOT NULL UNIQUE,
          company TEXT,
          email TEXT NOT NULL UNIQUE
        );
      `);
    console.log("Contact table created successfully.");

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Groups(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          groupName TEXT NOT NULL
        );
      `);
    console.log("Groups table created successfully.");

    await db.exec(`
        CREATE TABLE IF NOT EXISTS GroupContact (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ContactId INTEGER NOT NULL,
          GroupId INTEGER NOT NULL,
          FOREIGN KEY (ContactId) REFERENCES Contact(id),
          FOREIGN KEY (GroupId) REFERENCES Groups(id)
        );
      `);
    console.log("GroupContact table created successfully.");
  } catch (error) {
    console.error("Failed to create tables:", error.message);
  }
}

// Ensure this is called and awaited before any database operations
createTables()
  .then(() => {
    console.log("All tables created, ready for database operations.");
    // You can initiate insert operations or server listening here
  })
  .catch((error) => {
    console.error("Error setting up database:", error);
  });
