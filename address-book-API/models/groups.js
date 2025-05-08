const db = require('../connection');

class Groups {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      db.all(
        'SELECT * FROM Groups INNER JOIN Contact ON Contact.id = Groups.id AND GroupContact.id = Groups.id',
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
  static getGroups(id) {
    return new Promise((resolve, reject) => {
      db.get(
        'SELECT * FROM Groups INNER JOIN Contact ON Contact.id = Groups.id AND GroupContact.id = Groups.id WHERE Groups.id = ?',
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
  static createGroups(groupName) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Groups VALUES (?, ?)`, [null, groupName], (err) => {
        if (err) {
          reject(err);
          return;
        }
        db.get(`SELECT * FROM Groups ORDER BY id DESC`, (err, result) => {
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
      });
    });
  }
  static updateGroups(id, groupName) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Groups SET groupName = ? WHERE id = ?`,
        [groupName, id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          db.get(`SELECT * FROM Groups WHERE id = ?`, [id], (err, result) => {
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
  static deleteGroups(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM Groups WHERE id = ?', [id], (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        if (!result) {
          reject(new Error('Data not found'));
          return;
        }

        db.run('DELETE FROM Groups WHERE id = ?', [id], (err) => {
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

module.exports = Groups;
