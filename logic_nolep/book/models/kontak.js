let db = require("./konek");

class Contact {
    constructor(id, name, phoneNumber, company, email) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static create(name, phoneNumber, company, email) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`,
                [name, phoneNumber, company, email],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
        });
    }
}

module.exports = Contact;