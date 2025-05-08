let db = require("../connection/connection");

function createContact(name, phoneNumber, company, email) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`,
      [name, phoneNumber, company, email,],
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

function updateContact(id, name, phoneNumber, company, email) {
  return new Promise((resolve, reject) => {
    db.all(
      `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
      [name, phoneNumber, company, email, id],
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

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM Contact WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function getContacts() {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM Contact INNER JOIN GroupContact ON Contact.id = GroupContact.ContactId 
            INNER JOIN Groups ON Groups.id = GroupContact.GroupId`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(console.log(result));
        }
      }
    );
  });
}

module.exports = {getContacts, createContact, updateContact, deleteContact}
