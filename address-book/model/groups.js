let db = require("../connection/connection");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static createGroup(groupName) {
    let newGroup = new Groups(groupName);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Groups VALUES (null, ?)`,
        [newGroup.groupName],
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

  static updateGroup(id, groupName) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Groups
        SET groupName = ?
        WHERE id = ?`,
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

  static deleteGroup(id) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        DELETE FROM Groups WHERE id = ?;
        `,
        [id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );

      db.run(
        `
        DELETE FROM GroupContact WHERE GroupId = ?;
        `,
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

  static showGroups() {
    return new Promise((resolve, reject) => {
      db.all(
        `
      SELECT * FROM Groups
      INNER JOIN GroupContact ON Groups.id = GroupContact.GroupId
      `,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}

module.exports = Groups;
