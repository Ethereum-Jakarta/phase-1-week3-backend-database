let db = require("./konek");

class Group {
    constructor(id, groupName) {
        this.id = id;
        this.groupName = groupName;
    }

    static create(groupName) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups (groupName) VALUES (?)`,
                [groupName],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
        });
    }
}

module.exports = Group;