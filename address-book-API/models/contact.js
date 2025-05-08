const db = require('../connection');

class Contact {
  static getAllContacts() {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM Contact INNER JOIN Groups ON Groups.id = Contact.id INNER JOIN GroupContact ON GroupContact.id = Groups.id ',
        (err, result) => {
          if (err) return reject(err);
          if (!result) return reject(new Error('Data not found'));

          resolve(result);
        }
      );
    });
  }
  static getContact(id) {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM Contact INNER JOIN Groups ON Groups.id = Contact.id INNER JOIN GroupContact ON GroupContact.id = Groups.id WHERE Contact.id = ?',
        [id],
        (err, result) => {
          if (err) return reject(err);
          if (!result) return reject(new Error('Data not found'));

          resolve(result);
        }
      );
    });
  }
  static createContact(name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Contact VALUES (?, ?, ?, ?, ?)`,
        [null, name, phoneNumber, company, email],
        (err) => {
          if (err) return reject(err);

          db.get(`SELECT * FROM Contact ORDER BY id DESC`, (err, result) => {
            if (err) return reject(err);
            if (!result) return reject(new Error('Data not found'));

            resolve(result);
          });
        }
      );
    });
  }
  static updateContact(id, name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
        [name, phoneNumber, company, email, id],
        (err) => {
          if (err) return reject(err);

          db.get(`SELECT * FROM Contact WHERE id = ?`, [id], (err, result) => {
            if (err) return reject(err);
            if (!result) return reject(new Error('Data not found'));
            resolve(result);
          });
        }
      );
    });
  }
  static deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM Contact WHERE id = ?', [id], (err, result) => {
        if (err) return reject(err);
        if (!result) return reject(new Error('Data not found'));

        db.run('DELETE FROM Contact WHERE id = ?', [id], (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    });
  }
}

module.exports = Contact;
