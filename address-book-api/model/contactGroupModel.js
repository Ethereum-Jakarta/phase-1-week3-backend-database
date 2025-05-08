const db = require('../connection/connection');

const create = (contactId, groupId) => {
  const sqlInsert = `INSERT INTO GroupContact VALUES (null, ?, ?)`;
  const params = [contactId, groupId];

  return new Promise((resolve, reject) => {
    db.run(sqlInsert, params, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

const update = (id, contactId, groupId) => {
  const sqlUpdate = `UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?`;
  const params = [contactId, groupId, id];
  const sqlSelect = `SELECT * FROM GroupContact WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(sqlSelect, [id], (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
      db.run(sqlUpdate, params, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  });
};

const deleted = (id) => {
  const sqlDelete = `DELETE FROM GroupContact WHERE id = ?`;
  const params = [id];
  const sqlSelect = `SELECT * FROM GroupContact WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(sqlSelect, params, (err, data) => {
      if (err) {
        reject(err);
        return;
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
};

module.exports = { create, update, deleted };
