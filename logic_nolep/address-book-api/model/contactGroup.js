const db = require('../connection/db');

class contactGroup {
    constructor(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static create(contactId, groupId, cb) {
        let newContactGroup = new contactGroup(contactId, groupId);
        db.run('INSERT INTO contactGroup VALUES (null, ?, ?)', [newContactGroup.contactId, newContactGroup.groupId], function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, {
                    id: this.lastID,
                    contactId: newContactGroup.contactId,
                    groupId: newContactGroup.groupId
                });
            }
        });
    }

    static update(id, contactId, groupId, cb) {
        db.get('SELECT * FROM contactGroup WHERE id = ?', [id], (err, beforeData) => {
            if (err) {
                cb(err);
            } else if (!beforeData) {
                cb(new Error('Data not found!!'));
            } else {
                let updateContactGroup = new contactGroup(contactId, groupId);
                db.run(`UPDATE contactGroup SET contactId = ?, groupId = ? WHERE id = ?`, [updateContactGroup.contactId, updateContactGroup.groupId, id], function (err) {
                    if (err) {
                        cb(err);
                    } else {
                        const afterData = {
                            id: id,
                            contactId: updateContactGroup.contactId,
                            groupId: updateContactGroup.groupId
                        }
                        cb(null, { before: beforeData, after: afterData });
                    }
                });
            }
        });
    }

    static delete(id, cb) {
        db.get('SELECT * FROM contactGroup WHERE id = ?', [id], (err, deletedData) => {
            if (err) {
                cb(err);
            } else if (!deletedData) {
                cb(new Error('Data not found!!'));
            } else {
                db.run('DELETE FROM contactGroup WHERE id = ?', [id], function (err) {
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

module.exports = contactGroup;