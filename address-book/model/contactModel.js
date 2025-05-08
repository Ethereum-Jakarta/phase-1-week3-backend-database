const db = require("../connection.js");

class ContactModel {
  static async createContact(name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Contact VALUES(null, ?, ?, ?, ?)`,
        [name, phoneNumber, company, email],
        (err, result) => {
          if (err) {
            reject(err.message);
            return;
          }

          return resolve(JSON.stringify(result));
        }
      );
    });
  }

  static async showContact() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Contact`, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        return resolve(result);
      });
    });
  }

  static async deleteContact(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * From Contact Where id = ?`, [id], (err, result) => {
        let data = [];
        if (err) {
          reject(err);
          return;
        }

        if (!result) {
          reject("ID tidak ditemukan");
          return;
        }

        data.push(JSON.stringify(result));

        db.run(`DELETE FROM Contact WHERE id = ?`, [id], (err) => {
          if (err) {
            return reject(err);
          }

          return resolve(data);
        });
      });
    });
  }

  static async updateContact(id, name, phoneNumber, company, email) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Contact WHERE id = ?`, [id], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        if (!row) {
          reject("ID tidak ditemukan");
          return;
        }
        db.run(
          `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
          [name, phoneNumber, company, email, id],
          (updateErr) => {
            if (updateErr) {
              reject(updateErr);
              return;
            }
            db.get(
              `SELECT * FROM Contact WHERE id = ?`,
              [id],
              (err, targetRow) => {
                if (err) {
                  reject(err);
                  return;
                }
                resolve(JSON.stringify(targetRow));
              }
            );
          }
        );
      });
    });
  }
}

module.exports = ContactModel;
