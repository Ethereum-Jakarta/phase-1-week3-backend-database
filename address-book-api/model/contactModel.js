const db = require("../connection/connection");

const create = (name, phoneNumber, company, email) => {
  // Ensure the SQL statement is compatible with your table schema.
  // This assumes 'id' is an auto-incrementing primary key, and the table has exactly these columns.
  const sqlInsert = `INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`;
  const params = [name, phoneNumber, company, email];

  return new Promise((resolve, reject) => {
    db.run(sqlInsert, params, function (err) {
      if (err) {
        reject(err); // 'this' is not accessible in arrow functions, using traditional function
        return;
      }
      resolve(this.lastID); // Provides the last inserted id, might be useful
    });
  });
};

const read = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM Contact";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};

const update = (id, name, phoneNumber, company, email) => {
  const sqlUpdate = `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
  const params = [name, phoneNumber, company, email, id]; // Ensure the order here matches the SQL placeholders

  return new Promise((resolve, reject) => {
    // Start by attempting to update the contact
    db.run(sqlUpdate, params, function (err) {
      if (err) {
        reject(err); // Reject the promise if there's an error during the update
        return;
      }

      if (this.changes > 0) {
        // Check if any rows were updated
        // If the update was successful, fetch the updated contact to return it
        const sqlSelect = `SELECT * FROM Contact WHERE id = ?`;
        db.get(sqlSelect, [id], (err, data) => {
          if (err) {
            reject(err); // Reject the promise if there's an error fetching the updated contact
          } else {
      console.log("Groups fetched:", data);

            resolve(data); // Resolve the promise with the updated contact
          }
        });
      } else {
        resolve(null); // Resolve with null if no rows were updated (contact not found)
      }
    });
  });
};

const deleted = (id) => {
  const sqlDelete = `DELETE FROM Contact WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.run(sqlDelete, [id], function (err) {
      if (err) {
        reject(err); // Handle errors
        return;
      }
      resolve(this); // 'this' contains information about the operation, including the number of rows changed
    });
  });
};

module.exports = { create, read, update, deleted };
