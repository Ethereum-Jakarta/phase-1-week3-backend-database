const {db} = require("../connection");

class ContactGroups {
    constructor(IDContact, IDGroup) {
        this.IDContact = IDContact,
        this.IDGroup = IDGroup
    }

    static create(IDContact, IDGroup) {
        let newContactGroup = new ContactGroups(IDContact, IDGroup);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO ContactGroups VALUES (null,?,?)`,
                [newContactGroup.IDContact, newContactGroup.IDGroup],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve();
                    }
                }
            )
        })
    }

    static update(id, IDContact, IDGroup) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE ContactGroups SET IDContact=?, IDGroup=? WHERE IDGroupContact=?`,
                [IDContact, IDGroup, id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM ContactGroups WHERE IDGroupContact=?`, [id], 
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static show() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Contact`, (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    static get(id) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Contact WHERE IDContact=?`,[id], (err, row) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(row)
                }
            })
        })
    }
}

module.exports = ContactGroups;