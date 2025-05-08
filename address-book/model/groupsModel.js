let db = require('../connection.js');

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static create(groupName) {
    let newGroups = new Groups(groupName);
    let sqlInsert = `INSERT INTO Groups VALUES (null, ?)`;
    let params = [newGroups.groupName];
    let sqlSelect = `SELECT * FROM Groups ORDER BY id DESC`;

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

  static update(id, groupName) {
    let newGroups = new Groups(groupName);
    let sqlUpdate = `UPDATE Groups SET groupName = ? WHERE id = ?`;
    let params = [newGroups.groupName, id];
    let sqlCurrent = `SELECT * FROM Groups WHERE id = ?`;

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

    const updatedPromise = new Promise((resolve, reject) => {
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

    return Promise.all([currentRow, updatedPromise]);
  }

  static delete(id) {
    let sqlDelete = `DELETE FROM Groups WHERE id = ?`;
    let params = [id];
    let sqlSelect = `SELECT * FROM Groups WHERE id = ?`;
    let sqlDeleteContactGroup = `DELETE FROM GroupContact WHERE id = ?`;

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
        db.run(sqlDeleteContactGroup, params, (err) => {
          if (err) {
            reject(err);
            return;
          }
        });
      });
    });
  }

  static show() {
    let sqlJoin = `SELECT * FROM Groups JOIN GroupContact ON GroupContact.GroupId = Groups.id JOIN Contact ON GroupContact.ContactId = Contact.id`;
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

module.exports = Groups;
