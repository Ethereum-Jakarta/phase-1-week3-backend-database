const { db } = require("../connection/connection.js");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static create(groupName) {
    let newGroup = new Groups(groupName);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Groups VALUES (null,?)`,
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

  static update(id, groupName) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Groups SET GroupName=? WHERE IDGroup=?`,
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

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(`DELETE FROM ContactGroups WHERE IDGroup=?`, [id]);
        db.run(`DELETE FROM Groups WHERE IDGroup=?`, [id], (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    });
  }

  static get(IDGroup) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT g.IDGroup, g.GroupName, c.IDContact, c.Nama
                FROM Groups g
                LEFT JOIN ContactGroups gc ON g.IDGroup = gc.IDGroup
                LEFT JOIN Contact c ON gc.IDContact = c.IDContact
                WHERE g.IDGroup=?
            `,
        [IDGroup],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  static show() {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT g.IDGroup, g.GroupName, c.IDContact, c.Nama
                FROM Groups g
                LEFT JOIN ContactGroups gc ON g.IDGroup = gc.IDGroup
                LEFT JOIN Contact c ON gc.IDContact = c.IDContact
                ORDER BY g.IDGroup
            `,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // static get(id) {
  //     return new Promise((resolve, reject) => {
  //         db.get(`SELECT * FROM Contact WHERE IDContact=?`,[id], (err, row) => {
  //             if (err) {
  //                 reject(err)
  //             } else {
  //                 resolve(row)
  //             }
  //         })
  //     })
  // }
}

module.exports = Groups;
