const db = require('../connection/connection');

const create = (name, phoneNumber, company, email) => {
  const sqlInsert = `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`;
  const params = [name, phoneNumber, company, email];

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
  const sqlSelect = `SELECT * FROM Contact JOIN GroupContact ON GroupContact.ContactId = Contact.id JOIN Groups ON GroupContact.GroupId = Groups.id`;

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

const update = (id, name, phoneNumber, company, email) => {
  const sqlUpdate = `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
  const params = [name, phoneNumber, company, email, id];
  const sqlSelect = `SELECT * FROM Contact WHERE id = ?`;

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
      });
    });
  });
};

const deleted = (id) => {
  const sqlDelete = `DELETE FROM Contact WHERE id = ?`;
  const params = [id];
  const sqlSelect = `SELECT * FROM Contact WHERE id = ?`;

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
