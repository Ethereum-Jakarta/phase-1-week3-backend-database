let db = require("../connection/connection");

class Group {
    constructor(name) {
        this.name = name;
    }

    static show(cb) {

            db.all(`SELECT Groups.id, groupName,GROUP_CONCAT(Contact.name) AS "List Member" FROM Groups LEFT JOIN GroupContact ON Groups.id = GroupContact.GroupId LEFT JOIN Contact ON GroupContact.ContactId = Contact.id GROUP BY Groups.id`,
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
            db.run(`DELETE FROM Groups WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static update(id,name,cb) {
            db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`,
                [name,id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static create(name,cb) {
        let newGroup = new Group(name);
            db.run(`INSERT INTO Groups VALUES (null, ?)`,
                [newGroup.name],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb(this.lastID);
                    }
                })

    }
}

module.exports = Group;