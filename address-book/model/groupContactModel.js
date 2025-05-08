const db = require("../connection");

class ContactGroupModel {
  static async createContactGroup(contact, group) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO GroupContact VALUES(null, ?, ?)`,
        [contact, group],
        (err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        }
      );
    });
  }

  static async showContactGroup() {
    return new Promise((resolve, reject) => {
      db.all(
        `
            SELECT GroupContact.id, Groups.groupName, Contact.name FROM Groups
            JOIN GroupContact ON Groups.id = GroupContact.groupId
            JOIN Contact ON GroupContact.contactId = Contact.id`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          }

          resolve(JSON.stringify(result));
        }
      );
    });
  }

  static async deleteContactGroup(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM GroupContact WHERE id = ?`, [id], (err, result) => {
        let data = [];
        if (err) {
          return reject(err);
        }

        if (!result) {
          return reject("ID tidak ditemukan");
        }

        data.push(JSON.stringify(result));

        db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
          if (err) {
            return reject(err.message);
          }
          return resolve(data);
        });
      });
    });
  }

  static async updateContactGroup(id, contact, group) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM GroupContact WHERE id = ?`, [id], (err, result) => {
        if (err) {
          return reject(err);
        }

        if (!result) {
          return reject("ID tidak ditemukan");
        }

        db.run(
          `UPDATE GroupContact SET ContactID = ?, GroupID = ? WHERE id = ?`,
          [contact, group, id],
          (err) => {
            if (err) {
              return reject(err);
            }

            db.get(
              `SELECT * FROM GroupContact WHERE id = ?`,
              [id],
              (err, result) => {
                if (err) {
                  return reject(err);
                }

                return resolve(JSON.stringify(result));
              }
            );
          }
        );
      });
    });
  }
}

module.exports = ContactGroupModel;
