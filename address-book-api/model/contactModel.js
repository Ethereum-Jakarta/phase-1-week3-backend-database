import { db } from '../app.js'

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static create = (req, res, next) => {
        const { name, email, phoneNumber, company } = req.body;

        const newContact = new Contact(name, phoneNumber, company, email);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
                [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
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
        const { id, name, email, phoneNumber, company } = req.body

        const updateData = new Contact(name, phoneNumber, company, email)
        return new Promise((resolve, reject) => {
            db.run('UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?',
                [updateData.name, updateData.phoneNumber, updateData.company, updateData.email, id],
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
            db.run(`DELETE FROM Contact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve()
                    }
                })
            db.run(`DELETE FROM GroupContact WHERE contact_id = ?`,
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
            db.all(`SELECT * FROM Contact
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



export { Contact };