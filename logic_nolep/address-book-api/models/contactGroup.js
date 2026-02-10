const conn = require("../connection/connection");

class ContactGroups {
  constructor(contactId, groupId) {
    this.contactId = contactId;
    this.groupId = groupId;
  }

  static async create(contactId, groupId) {
    try {
      const db = await conn();
      try {
        const newContactGroups = new ContactGroups(contactId, groupId);
        const query = `INSERT INTO GroupContact VALUES (null, ?, ?)`;
        await db.run(query, [
          newContactGroups.contactId,
          newContactGroups.groupId,
        ]);
        return newContactGroups;
      } catch (err) {
        console.log(err);
      } finally {
        if (db) {
          await db.close();
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async update(id, contactId, groupId) {
    const db = await conn();
    try {
      const update = new ContactGroups(contactId, groupId);
      const query = `UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE ID = ?`;
      await db.run(query, [update.contactId, update.groupId, id]);
      return update;
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
      const query = `DELETE FROM GroupContact WHERE id = ?`;
      await db.run(query, [id]);
    } catch (err) {
      console.log(err);
    } finally {
      await db.close();
    }
  }
}

module.exports = ContactGroups;
