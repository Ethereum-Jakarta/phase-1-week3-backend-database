let db = require("../connection");

class ContactGroup {
    static create(contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)`, [contactId, groupId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static update(id, contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`, [contactId, groupId, id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = ContactGroup;