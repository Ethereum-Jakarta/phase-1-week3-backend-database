const db = require('../connection/db');

class Groups {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static getGroups(cb) {
        db.all(`SELECT groups.id, groups.groupName, GROUP_CONCAT(contact.name, ",") AS members
                FROM groups
                JOIN contactGroup ON groups.id = contactGroup.groupId
                JOIN contact ON contactGroup.contactId = contact.id
                GROUP BY groups.id
            `, (err, rows) => {
            if (err) {
                cb(err)
            } else {
                cb(null, rows);
            }
        });
    }

    static create(groupName, cb) {
        let newGroup = new Groups(groupName);
        db.run(`INSERT INTO groups (groupName) VALUES (?)`, [newGroup.groupName], function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, {
                    id: this.lastID,
                    groupName: newGroup.groupName
                });
            }
        });
    }

    static update(id, groupName, cb) {
        db.get('SELECT * FROM groups WHERE id = ?', [id], (err, beforeData) => {
            if (err) {
                cb(err);
            } else if (!beforeData) {
                cb(new Error('Data not found!!'));
            } else {
                let updateGroup = new Groups(groupName);
                db.run('UPDATE groups SET groupName = ? WHERE id = ?', [updateGroup.groupName, id], (err, after) => {
                    if (err) {
                        cb(err);
                    } else {
                        const afterData = {
                            id: id,
                            groupName: updateGroup.groupName
                        }
                        cb(null, { before: beforeData, after: afterData });
                    }
                })
            }
        })
    }

    static delete(id, cb) {
        db.get('SELECT * FROM groups WHERE id = ?', [id], (err, deletedData) => {
            if (err) {
                cb(err)
            } else if (!deletedData) {
                cb(new Error('Data not found!!'));
            } else {
                db.run('DELETE FROM groups WHERE id = ?', [id], function (err) {
                    if (err) {
                        cb(err);
                    } else {
                        db.run('DELETE FROM contactGroup WHERE groupId = ?', [id], (err) => {
                            if (err) {
                                cb(err);
                            } else {
                                cb(null, deletedData);
                            }
                        });
                    }
                });
            }
        });
    }

}

module.exports = Groups;