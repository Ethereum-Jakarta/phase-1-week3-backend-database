import { db } from '../connection.js'

class Groups {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static create = (groupName) => {
        const newContact = new Groups(groupName);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups VALUES (null, ?)`,
                [newContact.groupName],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Add Group Successful`);
                    }
                })
        })
    }

    static update = (id, groupName) => {
        const updateData = new Groups(groupName)
        return new Promise((resolve, reject) => {
            db.run('UPDATE Groups SET groupName = ? WHERE id = ?',
                [updateData.groupName, id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Updated data group Successful`);
                    }
                })
        })
    }

    static delete = (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Groups WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        db.run(`DELETE FROM GroupContact WHERE group_id = ?`,
                            [id],
                            (err) => {
                                if (err) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(`Deleted data group Successful`)
                                    }
                                }
                            }
                        );
                    }
                })
        })
    }

    static show = () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups
            INNER JOIN GroupContact ON group_id = Groups.id
            INNER JOIN Contact ON GroupContact.contact_id = Contact.id
            `,
                (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                })
        })
    }
}

export { Groups };