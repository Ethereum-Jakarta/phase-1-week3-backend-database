const db = require("../connection");

class Group {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static create(groupName) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups (groupName) VALUES (?)`, [groupName], 
                function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    static update(id, groupName) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Groups WHERE id = ?`, [id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static show() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = Group;
