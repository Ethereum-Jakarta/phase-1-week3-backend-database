const db = require("../config/db");

function get() {
    return new Promise((resolve, reject) => {
        db.all(
            `
                SELECT * FROM Contact
                LEFT JOIN GroupContact ON Contact.id = GroupContact.contactId
                LEFT JOIN Groups ON GroupContact.groupId = Groups.id
            `,
            [],
            (err, rows) => {
                if (err) return reject(err);

                return resolve(rows);
            }
        );
    });
}

function create({ name, phoneNumber, company, email }) {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)",
            [name, phoneNumber, company, email],
            (err) => {
                if (err) return reject(err);

                return resolve({ message: "Contact added succesfully" });
            }
        );
    });
}

function update({ id, name, phoneNumber, company, email }) {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?",
            [name, phoneNumber, company, email, id],
            (err) => {
                if (err) return reject(err);

                return resolve({ message: "Contact updated successfully" });
            }
        );
    });
}

function deleteContactById(id) {
    return new Promise((resolve, reject) => {
        db.get("SELECT id FROM Contact WHERE id = ?", [id], (err, row) => {
            if (err) return reject(err);
            if (!row) return reject(new Error("Contact not found"));

            db.run("DELETE FROM GroupContact WHERE contactId = ?", [id], (err) => {
                if (err) return reject(err);
    
                db.run("DELETE FROM Contact WHERE id = ?", [id], (err) => {
                    if (err) return reject(err);
    
                    return resolve({ message: "Contact deleted successfully" });
                })
            });
        })
    });
}

module.exports = {
    get,
    create,
    update,
    deleteContactById,
};
