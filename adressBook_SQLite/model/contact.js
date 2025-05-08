let db = require("../connection");

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static create(name, phoneNumber, company, email) {
        let newContact = new Contact(name, phoneNumber, company, email);
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

    static updates(id, name, phoneNumber, company, email){
        return new Promise((resolve, reject) => {
            db.all(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
                [name, phoneNumber, company, email,id],
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
            db.run(`DELETE FROM Contact WHERE id = ?`,
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
            db.all(`SELECT * FROM Contact INNER JOIN GroupContact ON Contact.id = GroupContact.ContactId 
            INNER JOIN Groups ON Groups.id = GroupContact.GroupId`,
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

module.exports = Contact;