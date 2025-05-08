let db = require("../connection");

class contactGroups{
    constructor(contactId, groupId){
        this.contactId = contactId
        this.groupId = groupId
    }

    static create(contactId, groupId) {
        let newContactGroups = new contactGroups(contactId, groupId);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact VALUES (null, ?, ?)`,
                [newContactGroups.contactId, newContactGroups.groupId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })

    }

    static updates(id, contactId, groupId){
        return new Promise((resolve, reject) => {
            db.all(`UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
                [contactId, groupId,id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })
    }

    static show(){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM GroupContact`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(console.log(result));
                    }
                })
        })
    }
}

module.exports = contactGroups;