let db = require("../mini_database/groups.db");
let view = require("../view");

class Groupengine {
  constructor(name) {
    this.name = name;
  }

  static createCG(contactId, groupId) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO GroupContact (ContactId, GroupId)
         SELECT c.id, g.id
         FROM Contact c, Groups g
         WHERE c.id = ?
         AND g.id = ?`,
        [contactId, groupId],
        function (err) {
          if (err) {
            view.errView(err);
            reject(err);
          } else {
            view.sucessView();
            resolve();
          }
        }
      );
    });
  }

  static updateCG(id, contactId, groupId) {
    let contactGroup = new createCG(id, contactId, groupId);
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
        [contactGroup.contactId, contactGroup.groupId, contactGroup.id],
        (err) => {
          if (err) {
            view.errView(err);
            reject(err);
          } else {
            view.sucessView();
            resolve();
          }
        }
      );
    });
  }

  static deleteCG(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
        if (err) {
          view.errView(err);
          reject(err);
        } else {
          view.sucessView();
          resolve();
        }
      });
    });
  }
}

module.exports = Groupengine;
