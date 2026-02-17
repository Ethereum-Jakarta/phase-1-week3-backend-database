import { db } from '../connection.js'

class GroupContact {
    constructor(contactId, groupId) {
        this.contact_id = contactId;
        this.group_id = groupId
    }

    static create = (contactId, groupId) => {
        const newContact = new GroupContact(contactId, groupId);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact VALUES (null, ?, ?)`,
                [newContact.contact_id, newContact.group_id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Add ContactGroup Successful`);
                    }
                })
        })
    }

    static update = (id, contactId, groupId) => {
        const updateData = new GroupContact(contactId, groupId)
        return new Promise((resolve, reject) => {
            db.run('UPDATE GroupContact SET contact_id = ?, group_id = ? WHERE id = ?',
                [updateData.contact_id, updateData.group_id, id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Updated data groupContact Successful`);
                    }
                })
        })
    }

    static delete = (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(`Deleted data groupContact Successful`)
                    }
                })
        })
    }

    static show = () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM GroupContact
            INNER JOIN Groups ON group_id = Groups.id
            INNER JOIN Contact ON contact_id = Contact.id
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

export { GroupContact };