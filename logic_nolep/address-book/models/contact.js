const { db } = require("../connection");

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
      db.run(
        `INSERT INTO Contact VALUES (null,?,?,?,?)`,
        [
          newContact.name,
          newContact.phoneNumber,
          newContact.company,
          newContact.email,
        ],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static update(id, nama, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Contact SET Nama=?, PhoneNumber=?, Company=?, Email=? WHERE IDContact=?`,
        [nama, phoneNumber, company, email, id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(`DELETE FROM ContactGroups WHERE IDContact=?`, [id]);
        db.run(`DELETE FROM Contact WHERE IDContact=?`, [id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }

  static show() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Contact`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Contact WHERE IDContact=?`, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static allContacts() {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT c.IDContact, c.Nama, c.PhoneNumber, c.company, c.Email, g.GroupName, cg.IDGroupContact
                FROM Contact c
                LEFT JOIN ContactGroups cg ON c.IDContact = cg.IDContact
                LEFT JOIN Groups g ON g.IDGroup = cg.IDGroup
                ORDER BY c.IDContact
            `,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }
}

module.exports = Contact;
