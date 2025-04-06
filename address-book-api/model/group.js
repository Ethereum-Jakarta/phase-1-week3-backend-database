const db = require("../connection/connection");

const createGroups = (groupName) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Groups VALUES (null, ?)`, [groupName], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const updateGroups = (groupName, id) => {
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
};

const deleteGroups = (id) => {
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
};

const getGroups = () => {
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
};

module.exports = { createGroups, updateGroups, deleteGroups, getGroups };
