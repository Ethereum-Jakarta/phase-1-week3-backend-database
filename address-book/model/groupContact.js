let db = require("../connection/connection");

class GroupContact {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static createGroupContact(contactId, groupId) {
    let newGroupContact = new GroupContact(contactId, groupId);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO GroupContact VALUES (null, ?, ?)`,
        [
          newGroupContact.contactId,
          newGroupContact.groupId,
        ],
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

  static updateGroupContact(id, contactId, groupId) {
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
  }

  static deleteGroupContact(id) {
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
  }

}

module.exports = GroupContact;
