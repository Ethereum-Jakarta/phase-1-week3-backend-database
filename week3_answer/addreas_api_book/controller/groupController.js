let db = require("../database");
class GroupController {
  constructor(name) {
    this.name = name;
  }

  static createGroup(name) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO groups (name) VALUES (?)`, [name], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static updateGroup(id, name) {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE groups SET name = ? WHERE id = ?`, [name, id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static deleteGroup(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM groups WHERE id = ?`, [id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  static getGroups() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM groups`, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  static deleteGroup(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM groups WHERE id = ?`, [id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

module.exports = GroupController;
