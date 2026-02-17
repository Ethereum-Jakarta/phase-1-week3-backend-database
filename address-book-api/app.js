import sqlite3 from 'sqlite3';
import express from 'express';
import { router } from './routes/index.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

const db = new sqlite3.Database('./data/address_book_api.db', (err) => {
    if (err) {
        console.log(err.message)
    } else {
        db.run(`
            CREATE TABLE IF NOT EXISTS Contact (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                phoneNumber TEXT NOT NULL UNIQUE,
                company TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )
        `, (err) => {
            console.log("Table Already Exist");
        })

        db.run(`
            CREATE TABLE IF NOT EXISTS Groups (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                groupName TEXT NOT NULL
            )
        `, (err) => {
            console.log("Table Already Exist");
        });

        db.run(`
            CREATE TABLE IF NOT EXISTS GroupContact (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                contact_id INTEGER NOT NULL,
                group_id INTEGER NOT NULL,
                FOREIGN KEY (contact_id) REFERENCES Contact(id),
                FOREIGN KEY (group_id) REFERENCES Groups(id)
            )
        `, (err) => {
            console.log("Table Already Exist");
        });
    }
})

export { db }