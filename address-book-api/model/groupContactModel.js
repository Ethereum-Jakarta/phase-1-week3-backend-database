import { db } from '../app.js'

class GroupContact {
    constructor(contactId, groupId) {
        this.contact_id = contactId;
        this.group_id = groupId
    }

    static create = (req, res, next) => {
        const { contact_id, group_id } = req.body;

        const newContact = new GroupContact(contact_id, group_id);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact VALUES (null, ?, ?)`,
                [newContact.contact_id, newContact.group_id],
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
        const { id, contact_id, group_id } = req.body;

        const updateData = new GroupContact(contact_id, group_id)
        return new Promise((resolve, reject) => {
            db.run('UPDATE GroupContact SET contact_id = ?, group_id = ? WHERE id = ?',
                [updateData.contact_id, updateData.group_id, id],
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
        const { id } = req.params;

        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
        })
    }

    static show = (req, res, next) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM GroupContact
            INNER JOIN Groups ON group_id = Groups.id
            INNER JOIN Contact ON contact_id = Contact.id
            `,
                (err, data) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                })
        })
    }
}

export { GroupContact };