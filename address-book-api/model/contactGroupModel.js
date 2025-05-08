const db = require("../connection/connection");

const readAll = () => {
  const sqlSelect = `
    SELECT 
      GroupContact.id AS associationId,
      Contact.id AS contactId, 
      Contact.name AS contactName, 
      Groups.id AS groupId,
      Groups.groupName AS groupName
    FROM GroupContact
    JOIN Contact ON GroupContact.ContactId = Contact.id
    JOIN Groups ON GroupContact.GroupId = Groups.id
  `;

  return new Promise((resolve, reject) => {
    db.all(sqlSelect, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      // Transform the rows if necessary to format the data as desired
      resolve(rows);
    });
  });
};

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

const update = (associationId, contactId, groupId) => {
  const sqlUpdate = `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`;
  const params = [contactId, groupId, associationId];

  return new Promise((resolve, reject) => {
    db.run(sqlUpdate, params, function (err) {
      if (err) {
        reject(err);
        return;
      }
      if (this.changes === 0) {
        resolve(null); // No rows updated, meaning the association wasn't found
      } else {
        resolve({ associationId, contactId, groupId }); // Return updated association details
      }
    });
  });
};

const deleted = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM GroupContact WHERE id = ?", [id], (err, row) => {
      if (err) {
        reject(err);
      } else if (row) {
        db.run("DELETE FROM GroupContact WHERE id = ?", [id], function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ changes: this.changes });
          }
        });
      } else {
        resolve({ changes: 0 }); // Tidak ada asosiasi yang ditemukan dengan ID tersebut
      }
    });
  });
};


const findAssociation = (contactId, groupId) => {
  const sql = `SELECT * FROM GroupContact WHERE ContactId = ? AND GroupId = ?`; // Adjust table and column names as necessary
  const params = [contactId, groupId];

  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(row); // If an association exists, it will be returned here
    });
  });
};

module.exports = { create, update, deleted, readAll, findAssociation };
