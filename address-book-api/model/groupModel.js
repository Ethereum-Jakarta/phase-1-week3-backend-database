const db = require('../connection/connection');

const create = (groupName) => {
  const sqlInsert = `INSERT INTO Groups VALUES (null, ?)`;
  const params = [groupName];

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

const read = () => {
  const sqlSelect = `SELECT * FROM Groups JOIN GroupContact ON GroupContact.GroupId = Groups.id JOIN Contact ON GroupContact.ContactId = Contact.id`;

  return new Promise((resolve, reject) => {
    db.all(sqlSelect, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const update = (id, groupName) => {
  const sqlUpdate = `UPDATE Groups SET groupName = ? WHERE id = ?`;
  const params = [groupName, id];
  const sqlSelect = `SELECT * FROM Groups WHERE id = ?`;

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
  const sqlDelete = `DELETE FROM Groups WHERE id = ?`;
  const params = [id];
  const sqlSelect = `SELECT * FROM Groups WHERE id = ?`;

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
module.exports = { create, read, update, deleted };
