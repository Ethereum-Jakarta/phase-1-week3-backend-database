import { db } from '../app.js'

class Groups {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static create = (req, res, next) => {
        const { groupName } = req.body;

        const newContact = new Groups(groupName);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups VALUES (null, ?)`,
                [newContact.groupName],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })
    }

    static update = (req, res, next) => {
        const { id, groupName } = req.body

        const updateData = new Groups(groupName)
        return new Promise((resolve, reject) => {
            db.run('UPDATE Groups SET groupName = ? WHERE id = ?',
                [updateData.groupName, id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
        })
    }

    static delete = (req, res, next) => {
        const { id } = req.params

        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Groups WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
            db.run(`DELETE FROM GroupContact WHERE group_id = ?`,
                [id],
                (err) => {
                    if (err) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve()
                        }
                    }
                }
            );
        })
    }

    static show = (req, res, next) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups
            `,
                (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
        })
    }
}

export { Groups };