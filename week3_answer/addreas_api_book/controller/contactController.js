let db = require("../database");
class ContactController {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  static createContact(name, phone) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO contacts (name, phone) VALUES (?, ?)`,
        [name, phone],
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static updateContact(id, name, phone) {
    let updateContact = new ContactController(id, name, phone);
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE contacts SET name = ?, phone = ? WHERE id = ?`,
        [updateContact.name, updateContact.phone, updateContact.id],
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM contacts WHERE id = ?`, [id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static getContacts() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM contacts`, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
}

module.exports = ContactController;
