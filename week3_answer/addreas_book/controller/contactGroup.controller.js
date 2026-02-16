let db = require("../mini_database/contact.db");
let view = require("../view");

class Cgengine {
  constructor(groupName, id) {
    this.name = groupName;
    this.id = id;
  }

  static createGroup(groupname) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO Groups (id, groupName) VALUES (null, ?)`,
        [groupName],
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

  static updateGroup(id, groupName) {
    let newGroup = new Cgengine(id, groupName);
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE Groups SET groupName = ? WHERE id = ?`,
        [newGroup.groupName],
        [newGroup.id],
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

  static deleteGroup(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM Groups WHERE id = ?`, [id], (err) => {
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

  static showGroup() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Groups`, [], (err, rows) => {
        if ((err, rows)) {
          view.errView(err);
          reject(err);
        } else {
          view.groupShow(rows);
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Cgengine;
