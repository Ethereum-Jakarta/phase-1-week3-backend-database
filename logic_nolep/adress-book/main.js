const db = require("./connection");

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phoneNumber TEXT UNIQUE,
        company TEXT,
        email TEXT UNIQUE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        groupName TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ContactId INTEGER,
        GroupId INTEGER,
        FOREIGN KEY (ContactId) REFERENCES Contact(id),
        FOREIGN KEY (GroupId) REFERENCES Groups(id)
    )`);
});


// ***Command List***
// ```
// /*
// ====================
// ADDRESS BOOK COMMAND
// ====================

// > node main.js create Contact <name> <phoneNumber> <company> <email>
// > node main.js update Contact <id> <name> <phoneNumber> <company> <email>
// > node main.js delete Contact <id>
// > node main.js showContact
// > node main.js create Groups <groupName>
// > node main.js update Groups <id> <groupName>
// > node main.js delete Groups <id>
// > node main.js showGroups
// > node main.js create ContactGroups <contactId> <groupId>
// > node main.js update ContactGroups <id> <contactId> <groupId>
// > node main.js delete ContactGroups <id> 
// > node main.js help

// */
// ```

const { createContact, showContacts, updateContact, deleteContact } = require("./controllers/contactController");
const { createGroup, showGroups, updateGroup, deleteGroup } = require("./controllers/groupController");
const { createContactGroup, deleteContactGroup } = require("./controllers/groupContactController");
const view = require("./views/view");

const command = process.argv[2];
const type = process.argv[3];


switch (command) {
    case 'create':
        if (type === 'Contact') {
            createContact(process.argv[4], process.argv[5], 
                process.argv[6], process.argv[7])
                .then(() => 
                console.log('Contact created!'),
                db.close()
                )
                .catch(console.error);
        } 
        else if (type === 'Groups') {
            createGroup(process.argv[4])
                .then(() => console.log('Group created!'),
                db.close())
                .catch(console.error);
        }else if (type === 'ContactGroups') {
            const contactId = process.argv[4];
            const groupId = process.argv[5];
            createContactGroup(contactId, groupId)
                .then(() => console.log('Contact added to group!'),db.close())
                .catch(console.error);
        }
        break;
    case 'update':
        if (type === 'Contact') {
            updateContact(process.argv[4], process.argv[5], process.argv[6], process.argv[7],  process.argv[8])
                .then(() => 
                console.log('Update Contact Berhasil!!'),
                db.close()
                )
                .catch(console.error);
        } 
        else if (type === 'Groups') {
            updateGroup(process.argv[4])
                .then(() => console.log('Update Group Berhasil!!'),db.close())
                .catch(console.error);
        }
        break;
    case 'delete':
        if (type === 'Contact') {
            deleteContact(process.argv[4], process.argv[5], process.argv[6], process.argv[7])
                .then(() => 
                console.log('Contact berhasil di hapus!'),
                db.close()
                )
                .catch(console.error);
        } 
        else if (type === 'Groups') {
            deleteGroup(process.argv[4])
                .then(() => console.log('Grup berhasil di hapus!'),db.close())
                .catch(console.error);
        }
        else if (typeContact === 'ContactGroups') {
            const id = process.argv[4]; // ID untuk penghapusan dari GroupContact
            deleteContactGroup(id)
                .then(() => console.log(`ContactGroup with ID ${id} deleted!`),db.close())
                .catch(console.error);
        }
        break;        
    case 'showContact':
        showContacts()
            .then(view.showContacts)
            .catch(console.error);
        break;
    case 'showGroups':
        showGroups()
            .then(view.showGroups)
            .catch(console.error);
        break;
    // Tambahkan case lainnya untuk update dan delete
    default:
        console.log('Command not recognized');
}
