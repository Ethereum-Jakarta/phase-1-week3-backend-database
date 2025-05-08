let db = require('../connection.js');

class Contact {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static create(name, phoneNumber, company, email) {
    let newContact = new Contact(name, phoneNumber, company, email);
    let sqlInsert = `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`;
    let params = [
      newContact.name,
      newContact.phoneNumber,
      newContact.company,
      newContact.email,
    ];
    let sqlSelect = `SELECT * FROM Contact ORDER BY id DESC`;

    return new Promise((resolve, reject) => {
      db.run(sqlInsert, params, (err) => {
        if (err) {
          reject(err);
          return;
        }
        db.get(sqlSelect, (err, data) => {
          if (err) {
            reject(err);
            return;
          }
          if (!data) {
            reject(new Error('Data not found.'));
            return;
          }

          resolve(data);
        });
      });
    });
  }

  static update(id, name, phoneNumber, company, email) {
    let newContact = new Contact(name, phoneNumber, company, email);
    let sqlUpdate = `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
    let params = [
      newContact.name,
      newContact.phoneNumber,
      newContact.company,
      newContact.email,
      id,
    ];
    let sqlCurrent = `SELECT * FROM Contact WHERE id = ?`;

    const currentRow = new Promise((resolve, reject) => {
      db.get(sqlCurrent, [id], (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        if (!data) {
          reject(new Error(`Data with id ${id} is not found.`));
        }

        resolve(data);
      });
    });

    const updatePromise = new Promise((resolve, reject) => {
      db.run(sqlUpdate, params, (err) => {
        if (err) {
          reject(err);
          return;
        }
        db.get(sqlCurrent, [id], (err, data) => {
          if (err) {
            reject(err);
            return;
          }
          if (!data) {
            reject(new Error(`Data with id ${id} is not found.`));
          }

          resolve(data);
        });
      });
    });

    return Promise.all([currentRow, updatePromise]);
  }

  static delete(id) {
    let sqlDelete = `DELETE FROM Contact WHERE id = ?`;
    let params = [id];
    let sqlSelect = `SELECT * FROM Contact WHERE id = ?`;

    return new Promise((resolve, reject) => {
      db.get(sqlSelect, params, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        if (!data) {
          reject(new Error(`Data with id ${id} is not found.`));
        }
        resolve(data);
        db.run(sqlDelete, params, (err) => {
          if (err) {
            reject(err);
            return;
          }
        });
      });
    });
  }

  static show() {
    let sqlJoin = `SELECT * FROM Contact JOIN GroupContact ON GroupContact.ContactId = Contact.id JOIN Groups ON GroupContact.GroupId = Groups.id`;
    return new Promise((resolve, reject) => {
      db.all(sqlJoin, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        if (!data) {
          reject(new Error('Data not found.'));
        }
        resolve(data);
      });
    });
  }
}

module.exports = Contact;
