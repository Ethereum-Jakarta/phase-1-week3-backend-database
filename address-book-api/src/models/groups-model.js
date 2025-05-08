const db = require("../config/db");

function get() {
    return new Promise((resolve, reject) => {
        db.all(
            `
                SELECT * FROM Groups
                LEFT JOIN GroupContact ON Groups.id = GroupContact.groupId
                LEFT JOIN Contact ON GroupContact.contactId = Contact.id
            `,
            [],
            (err, rows) => {
                if (err) return reject(err);

                return resolve(rows);
            }
        );
    });
}

function create(name) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO Groups (groupName) VALUES (?)", [name], (err) => {
            if (err) return reject(err);

            return resolve({ message: "Groups added successfully" });
        });
    });
}

function update(id, name) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(
                "UPDATE Groups SET groupName = ? WHERE id = ?",
                [name, id],
                (err) => {
                    if (err) return reject(err);
    
                    return resolve({ message: "Groups updated successfully" });
                }
            );
        })
    });
}

function deleteGroupsById(id) {
    return new Promise((resolve, reject) => {
        db.get("SELECT id FROM Groups WHERE id = ?", [id], (err, row) => {
            if (err) return reject(err);
            if (!row) return reject(new Error("Groups not found"));

            db.run(
                "DELETE FROM GroupContact WHERE groupId = ?",
                [id],
                (err) => {
                    if (err) return reject(err);

                    db.run("DELETE FROM Groups WHERE id = ?", [id], (err) => {
                        if (err) return reject(err);

                        return resolve({
                            message: "Groups deleted successfully",
                        });
                    });
                }
            );
        });
    });
}

module.exports = {
    get,
    create,
    update,
    deleteGroupsById,
};
