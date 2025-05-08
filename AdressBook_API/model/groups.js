let db = require("../connection/connection");

function createGroups(groupName) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Groups VALUES (null, ?)`,
      [groupName],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

function updateGroups(id, groupName) {
  return new Promise((resolve, reject) => {
    db.all(
      `UPDATE Groups SET groupName = ? WHERE id = ?`,
      [groupName, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

function deleteGroups(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM Groups WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getGroups() {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM Groups INNER JOIN GroupContact ON Groups.id = GroupContact.GroupId
            INNER JOIN Contact ON Contact.id = GroupContact.ContactId`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(console.log(result));
        }
      }
    );
  });
}

module.exports = {createGroups, updateGroups, deleteGroups, getGroups};
