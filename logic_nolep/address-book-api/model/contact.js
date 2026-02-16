const db = require('../connection/db');

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static getContacts(cb) {
        db.all(`SELECT contact.id, contact.name, contact.phoneNumber, contact.company, contact.email, GROUP_CONCAT(groups.groupName, ',') AS joined_groups
                FROM contact
                JOIN contactGroup ON contact.id = contactGroup.contactId
                JOIN groups ON contactGroup.groupId = groups.id
                GROUP BY contact.id
            `, (err, rows) => {
            if (err) {
                cb(err);
            } else {
                cb(null, rows);
            }
        })
    }

    static create(name, phoneNumber, company, email, cb) {
        let newContact = new Contact(name, phoneNumber, company, email);
        db.run(`INSERT INTO contact VALUES (null, ?, ?, ?, ?)`, [newContact.name, newContact.phoneNumber, newContact.company, newContact.email], function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, {
                    id: this.lastID,
                    name: newContact.name,
                    phoneNumber: newContact.phoneNumber,
                    company: newContact.company,
                    email: newContact.email
                });
            }
        });
    }

    static update(id, name, phoneNumber, company, email, cb) {
        db.get('SELECT * FROM contact WHERE id = ?', [id], (err, beforeData) => {
            if (err) {
                cb(err);
            } else if (!beforeData) {
                cb(new Error('Data not found!!'));
            } else {
                let updateContact = new Contact(name, phoneNumber, company, email);
                db.run(`UPDATE contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`, [updateContact.name, updateContact.phoneNumber, updateContact.company, updateContact.email, id], function (err) {
                    if (err) {
                        cb(err);
                    } else {
                        const afterData = {
                            id: id,
                            name: updateContact.name,
                            phoneNumber: updateContact.phoneNumber,
                            company: updateContact.company,
                            email: updateContact.email
                        }
                        cb(null, { before: beforeData, after: afterData });
                    }
                });
            }
        })
    }

    static delete(id, cb) {
        db.get('SELECT * FROM contact WHERE id = ?', [id], (err, deletedData) => {
            if (err) {
                cb(err);
            } else if (!deletedData) {
                cb(new Error('Data not found!!'));
            } else {
                db.run(`DELETE FROM contact WHERE id = ?`, [id], function (err) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, deletedData);
                    }
                });
            }
        });
    }

}

module.exports = Contact;