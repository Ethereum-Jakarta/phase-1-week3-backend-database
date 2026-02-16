let db = require("../database");
class ContactGroupController {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static createContactGroup(contactId, groupId) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO contact_group (contact_id, group_id) VALUES (?, ?)`,
        [contactId, groupId],
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static updateContactGroup(id, contactId, groupId) {
    let updateContactGroup = new ContactGroupController(id, contactId, groupId);
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE contact_group SET contact_id = ?, group_id = ? WHERE id = ?`,
        [
          updateContactGroup.contactId,
          updateContactGroup.groupId,
          updateContactGroup.id,
        ],
        (err) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  static deleteContactGroup(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM contact_group WHERE id = ?`, [id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static getContactGroups() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM contact_group`, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
}

module.exports = ContactGroupController;
