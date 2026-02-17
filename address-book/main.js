import { db } from "./connection.js";
import { AddressBookController } from "./controller/index.js";
const command = process.argv[2];
const argument = process.argv.slice(3);

/*
====================
ADDRESS BOOK COMMAND
====================

> node main.js create Contact <name> <phoneNumber> <company> <email>
> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
> node main.js delete Contact <id>
> node main.js showContact
> node main.js create Groups <groupName>
> node main.js update Groups <id> <groupName>
> node main.js delete Groups <id>
> node main.js showGroups
> node main.js create ContactGroups <contactId> <groupId>
> node main.js update ContactGroups <id> <contactId> <groupId>
> node main.js delete ContactGroups <id> 
> node main.js help

*/

switch (command) {
    case 'create':
        AddressBookController.create(argument[0], argument[1], argument[2], argument[3], argument[4])
        break
    case 'update':
        AddressBookController.update(argument[0], argument[1], argument[2], argument[3], argument[4], argument[5])
        break
    case 'delete':
        AddressBookController.delete(argument[0], argument[1])
        break
    case 'showContact':
        AddressBookController.showContact()
        break
    case 'showGroups':
        AddressBookController.showGroups()
        break
    default:
        AddressBookController.help();
        break
}

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        phoneNumber INTEGER UNIQUE,
        company TEXT,
        email TEXT UNIQUE
    )
    `);

    db.run(`
    CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY,
        groupName TEXT
    )
    `);

    db.run(`
    CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY,
        contact_id INTEGER,
        group_id INTEGER,
        FOREIGN KEY (contact_id) REFERENCES Contact(id),
        FOREIGN KEY (group_id) REFERENCES Groups(id)
    )
    `);
})
