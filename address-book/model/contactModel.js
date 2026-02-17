import { db } from '../connection.js'

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static create = (name, phoneNumber, company, email) => {
        const newContact = new Contact(name, phoneNumber, company, email);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
                [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Add Contact Successful`);
                    }
                })
        })
    }

    static update = (id, name, phoneNumber, company, email) => {
        const updateData = new Contact(name, phoneNumber, company, email)
        return new Promise((resolve, reject) => {
            db.run('UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?',
                [updateData.name, updateData.phoneNumber, updateData.company, updateData.email, id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(`Updated data contact Successful`);
                    }
                })
        })
    }

    static delete = (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Contact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(`Deleted data contact Successful`)
                    }
                })
        })
    }

    static show = () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Contact
            INNER JOIN GroupContact ON contact_id = Contact.id
            INNER JOIN Groups ON GroupContact.group_id = Groups.id
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



export { Contact };