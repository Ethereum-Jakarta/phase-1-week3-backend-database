const db = require("../connection");

class GroupContact {
    static create(contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)`, [contactId, groupId], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = GroupContact;
