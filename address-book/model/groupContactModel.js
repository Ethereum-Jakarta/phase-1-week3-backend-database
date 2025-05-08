let db = require('../connection.js');

class GroupContact {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static create(contactId, groupId) {
    let newGroupContact = new GroupContact(contactId, groupId);
    let sqlInsert = `INSERT INTO GroupContact VALUES (null, ?, ?)`;
    let params = [newGroupContact.contactId, newGroupContact.groupId];
    let sqlSelect = `SELECT * FROM GroupContact ORDER BY id DESC`;

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
          }

          resolve(data);
        });
      });
    });
  }

  static update(id, contactId, groupId) {
    let newGroupContact = new GroupContact(contactId, groupId);
    let sqlUpdate = `UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?`;
    let params = [newGroupContact.contactId, newGroupContact.groupId, id];
    let sqlCurrent = `SELECT * FROM GroupContact WHERE id = ?`;

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
    let sqlDelete = `DELETE FROM GroupContact WHERE id = ?`;
    let params = [id];
    let sqlSelect = `SELECT * FROM GroupContact WHERE id = ?`;

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
}

module.exports = GroupContact;
