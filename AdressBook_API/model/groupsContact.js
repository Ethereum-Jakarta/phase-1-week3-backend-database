let db = require("../connection/connection");

function createGroupsContact(contactId, groupId) {
  let newContactGroups = new contactGroups(contactId, groupId);
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO GroupContact VALUES (null, ?, ?)`,
      [newContactGroups.contactId, newContactGroups.groupId],
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

function updateGroupsContact(id, contactId, groupId) {
  return new Promise((resolve, reject) => {
    db.all(
      `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
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
}

function deleteGroupsContact(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getGroupsContact() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM GroupContact`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(console.log(result));
      }
    });
  });
}

module.exports = {getGroupsContact, deleteGroupsContact, createGroupsContact, updateGroupsContact};
