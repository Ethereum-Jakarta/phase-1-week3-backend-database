let sqlite = require('sqlite3').verbose()
let db = new sqlite.Database("./address_book.db")

module.exports = db