const db = require("../config/db");

function create(contactId, groupId) {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO GroupContact (contactId, groupId) VALUES (?, ?)",
            [contactId, groupId],
            (err) => {
                if (err) return reject(err);

                return resolve({ message: "Group Contact added succesfully" });
            }
        );
    });
}

function update({id, contactId, groupId}) {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?",
            [contactId, groupId, id], err => {
                if (err) return reject(err)

                return resolve({ message: 'Group Contact updated succesfully' })
            }
        );
    })
}

function deleteGroupContactById(id) {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM GroupContact WHERE id = ?", [id], err => {
            if (err) return reject(err)

            return resolve({ message: 'Group Contact deleted succesfully' })
        })
    })
}

module.exports = {
    create,
    update,
    deleteGroupContactById
};
