const conn = require("../connection/connection");

class Groups {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static async create(groupName) {
    const db = await conn();
    try {
      const newGroups = new Groups(groupName);
      const query = `INSERT INTO Groups VALUES (null, ?, ?, ?, ?)`;
      await db.run(query, [
        newGroups.groupName
      ]);
      return newGroups;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async update(id, groupName) {
    const db = await conn();
    try {
      const updateGroups = new Groups(groupName);
      const query = `UPDATE Groups SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
      await db.run(query, [
        updateGroups.groupName,
        id,
      ]);
      return updateGroups;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async delete(id) {
    const db = await conn();
    try {
      const query = `DELETE FROM Groups WHERE id = ?`;
      await db.run(query, [id]);
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async showWithGroups() {
    const db = await conn();
    try {
      const showGroups = await db.all(
        `SELECT Groups.*, Contact.* FROM Groups 
         LEFT JOIN GroupContact ON Groups.id = GroupContact.GroupId 
         LEFT JOIN Contact ON GroupContact.ContactId = Contact.id`
      );
      return showGroups;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }
}

module.exports = Groups;