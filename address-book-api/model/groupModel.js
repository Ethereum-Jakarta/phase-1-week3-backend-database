const db = require("../connection/connection");

const executeSql = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this); // 'this' contains context, like lastID for INSERTs
    });
  });
};


const create = (groupName) => {
  const sqlInsert = `INSERT INTO Groups (groupName) VALUES (?)`;
  return executeSql(sqlInsert, [groupName]).then((result) => ({
    id: result.lastID,
    groupName,
  }));
};

const read = () => {
  const sqlSelect = `SELECT * FROM Groups`; // Simplified for troubleshooting

  return new Promise((resolve, reject) => {
    db.all(sqlSelect, (err, data) => {
      if (err) {
        console.error("Error fetching groups:", err);
        reject(err);
        return;
      }
      console.log("Groups fetched:", data);
      resolve(data);
    });
  });
};

const update = (id, groupName) => {
  const sqlUpdate = `UPDATE Groups SET groupName = ? WHERE id = ?`;
  const params = [groupName, id];
  const sqlSelect = `SELECT * FROM Groups WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(sqlSelect, [id], (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      console.log("Groups fetched:", data);
      resolve(data);
      db.run(sqlUpdate, params, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  });
};

const deleted = (id) => {
  const sqlDelete = `DELETE FROM Groups WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.run(sqlDelete, [id], function (err) {
      if (err) {
        reject(err);
      } else if (this.changes > 0) {
        resolve({ deleted: true, id }); // Indicate successful deletion and provide the id
      } else {
        resolve({ deleted: false }); // No rows deleted, indicating the group wasn't found
      }
    });
  });
};

const findByName = (groupName) => {
  const sql = `SELECT * FROM Groups WHERE groupName = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [groupName], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row); // row is null if no group is found
      }
    });
  });
};


module.exports = {
  create,
  read,
  update,
  deleted,
  findByName,
};
