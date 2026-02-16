import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = await open({
    filename: 'address_book.db',
    driver: sqlite3.Database
});

export default db;