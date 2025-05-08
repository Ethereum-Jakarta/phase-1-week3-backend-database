let db = require("../connection/connection");

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static showContact(cb) {
        // console.log("model")
            db.all(`SELECT Contact.id,name,phoneNumber,company,email, GROUP_CONCAT(Groups.groupName) AS "List Group" FROM Contact LEFT JOIN GroupContact ON Contact.id = GroupContact.ContactId LEFT JOIN Groups ON GroupContact.GroupId = Groups.id GROUP BY Contact.id;`,
                (err,rows) => {
                    if (err) {
                        cb(err, null);
                    } else {
                        // console.log(rows);
                        cb(null, rows); 
                    }
                })

    }
    static delete(id,cb) {
            db.run(`DELETE FROM contact WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static update(id,name, phoneNumber, company, email,cb) {
            db.run(`UPDATE contact SET name = ?, phoneNumber = ?, company =?,email=? WHERE id = ?`,
                [name, phoneNumber, company, email,id],
                (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        cb();
                    }
                })

    }
    static create(name, phoneNumber, company, email,cb) {
        let newContact = new Contact(name, phoneNumber, company, email);
            db.run(`INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
                [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
                (err) => {
                    if (err) {
                        cb(err,null);
                    } else {
                        cb(null,this.lastID);
                    }
                })

    }
}

module.exports = Contact;