const db = require('../connection');

class Contact {
  static createTable(name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Contact VALUES (?, ?, ?, ?, ?)`,
        [null, name, phoneNumber, company, email],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          db.get(`SELECT * FROM Contact ORDER BY id DESC`, (err, result) => {
            if (err) {
              reject(err);
              return;
            }

            if (!result) {
              reject(new Error('Data not found'));
              return;
            }

            resolve(result);
          });
        }
      );
    });
  }
  static updateTable(id, name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
        [name, phoneNumber, company, email, id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          db.get(`SELECT * FROM Contact WHERE id = ?`, [id], (err, result) => {
            if (err) {
              reject(err);
              return;
            }

            if (!result) {
              reject(new Error('Data not found'));
              return;
            }
            resolve(result);
          });
        }
      );
    });
  }
  static deleteTable(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM Contact WHERE id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        if (!result) {
          reject(new Error('Data not found'));
          return;
        }

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

  static showContact() {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM Contact INNER JOIN Groups ON Groups.id = Contact.id INNER JOIN GroupContact ON GroupContact.id = Groups.id ',
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          if (!result) {
            reject(new Error('Data not found'));
            return;
          }

          resolve(result);
        }
      );
    });
  }
}

module.exports = Contact;
