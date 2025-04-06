let db = require("../connection/connection");

const createGroupContact = (contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO GroupContact VALUES (null, ?, ?)`,
      [contactId, groupId],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const updateGroupContact = (contactId, groupId, id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE GroupContact
        SET contactId = ?, groupId = ?
        WHERE id = ?`,
      [contactId, groupId, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const deleteGroupContact = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM GroupContact
        WHERE id = ?`,
      [id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

module.exports = {createGroupContact, updateGroupContact, deleteGroupContact}
