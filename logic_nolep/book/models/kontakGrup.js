let db = require("./konek");

class ContactGroup {
    constructor(id, contactId, groupId) {
        this.id = id;
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static create(contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)`,
                [contactId, groupId],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
        });
    }
}

module.exports = ContactGroup;