let db = require("../connection/connection");

class Contact {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static createContact(name, phoneNumber, company, email) {
    let newContact = new Contact(name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
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

  static updateContact(id, name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE contact
        SET name = ?, phoneNumber = ?, company = ?, email = ?
        WHERE id = ?`,
        [name, phoneNumber, company, email, id],
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

  static deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.run(
        `DELETE FROM contact
        WHERE id = ?`,
        [id],
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

  /*
  static showContact() {
    return new Promise((resolve, reject) => {
      db.run();
    });
  }
  */

  static showContact() {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM contact
      INNER JOIN GroupContact ON contact.id = GroupContact.ContactId`,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}

module.exports = Contact;
