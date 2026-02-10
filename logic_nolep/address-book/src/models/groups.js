const conn = require("../connection/connection");

class Group {
  constructor(groupName) {
    this.groupName = groupName;
  }

  static async create(groupName) {
    const db = await conn();
    try {
      const create = new Group(groupName);
      const query = `INSERT INTO Group VALUES (null, ?)`;
      await db.run(query, [create.groupName]);
      return create;
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
      const update = new Group(groupName);
      const query = `UPDATE Group SET groupName = ? WHERE id = ?`;
      await db.run(query, [update.groupName, id]);
      return update;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async deleteByGroupId(groupId) {
    const db = await conn();
    try {
      const query = `DELETE FROM GroupContact WHERE GroupId = ?`;
      await db.run(query, [groupId]);
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
      const query = `DELETE FROM Group WHERE id = ?`;
      await db.run(query, id);
    } catch (err) {
      console.log(err);
    }
  }

  static async showWithContacts() {
    const db = await conn();
    try {
      const show = await db.all(
        `SELECT Group.*, Contact.* FROM Group 
         LEFT JOIN GroupContact ON Group.id = GroupContact.GroupId 
         LEFT JOIN Contact ON GroupContact.ContactId = Contact.id`
      );
      return show;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }
}

module.exports = Group;