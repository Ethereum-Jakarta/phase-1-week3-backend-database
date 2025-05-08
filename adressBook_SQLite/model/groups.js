let db = require("../connection");

class Groups {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static create(groupName) {
        let newGroups = new Groups(groupName);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups VALUES (null, ?)`,
                [newGroups.groupName],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })

    }

    static updates(id, groupName){
        return new Promise((resolve, reject) => {
            db.all(`UPDATE Groups SET groupName = ? WHERE id = ?`,
                [groupName ,id],
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
            db.run(`DELETE FROM Groups WHERE id = ?`,
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
            db.all(`SELECT * FROM Groups INNER JOIN GroupContact ON Groups.id = GroupContact.GroupId
            INNER JOIN Contact ON Contact.id = GroupContact.ContactId`,
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

module.exports = Groups;