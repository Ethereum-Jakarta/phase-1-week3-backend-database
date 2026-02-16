const path = require("path");

let db = path.join(__dirname, "../mini_database/contact.db");
let view = require(path.join(__dirname, "../view"));

class Contactengine {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static createContact(name, phoneNumber, company, email) {
    let newContact = new Contactengine(name, phoneNumber, company, email);
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
            view.errView(err);
            reject(err);
          } else {
            view.sucessView();
            resolve();
          }
        }
      );
    });
  }

  static updateContact(id, name, phoneNumber, company, email) {
    let updateContact = new Contactengine(id, name, phoneNumber, company, email);
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id ?`,
        [
          updateContact.name,
          updateContact.phoneNumber,
          updateContact.company,
          updateContact.email,
          updateContact.id,
        ],
        (err) => {
          if (err) {
            view.errView(err);
            reject(err);
          } else {
            view.sucessView();
            resolve();
          }
        }
      );
    });
  }

  static deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM Contact WHERE id ?`, [id], (err) => {
        if (err) {
          view.errView(err);
          reject(err);
        } else {
          view.sucessView();
          resolve();
        }
      });
    });
  }

  static showContact() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Contact`, [], (err, rows) => {
        if (err) {
          view.errView(err);
          reject(err);
        } else {
          view.contactShow(rows);
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Contactengine;
