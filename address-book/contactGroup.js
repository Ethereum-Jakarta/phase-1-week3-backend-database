let db = require("./connection");

class ContactGroup {
    constructor(contact,group) {
        this.contact = contact;
        this.group = group;
    }

    static show(cb) {

            db.all(`SELECT * FROM GroupContact`,
                (err,rows) => {
                    if (err) {
                        cb(err);
                    } else {
                        // console.log(row)
                        cb(rows)
                    }
                })

    }
    static delete(id,cb) {
            db.run(`DELETE FROM GroupContact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static update(id,contact,group,cb) {
            db.run(`UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
                [contact,group,id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static create(contact,group,cb) {
        let newContactGroup = new ContactGroup(contact,group);
            db.run(`INSERT INTO GroupContact VALUES (null, ?,?)`,
                [newContactGroup.contact,newContactGroup.group],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb(this.lastID);
                    }
                })

    }
}

module.exports = ContactGroup;