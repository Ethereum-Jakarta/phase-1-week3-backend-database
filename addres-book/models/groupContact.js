const db = require('../connection');

class GroupContact {
  static createTable(contactId, groupId) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO GroupContact VALUES (?, ?, ?)`,
        [null, contactId, groupId],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          db.get(
            `SELECT * FROM GroupContact ORDER BY id DESC`,
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
        }
      );
    });
  }
  static updateTable(id, contactId, groupId) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?`,
        [contactId, groupId, id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          db.get(
            `SELECT * FROM GroupContact WHERE id = ?`,
            [id],
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
        }
      );
    });
  }
  static deleteTable(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM GroupContact WHERE id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        if (!result) {
          reject(new Error('Data not found'));
          return;
        }

        db.run('DELETE FROM GroupContact WHERE id = ?', [id], (err) => {
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

module.exports = GroupContact;
