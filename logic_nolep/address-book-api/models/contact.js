const conn = require("../connection/connection");

class Contact {
  constructor(name, phoneNumber, company, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.company = company;
    this.email = email;
  }

  static async create(name, phoneNumber, company, email) {
    const db = await conn();
    try {
      const newContact = new Contact(name, phoneNumber, company, email);
      const query = `INSERT INTO Contact VALUES (null, ?, ?, ?, ?)`;
      await db.run(query, [
        newContact.name,
        newContact.phoneNumber,
        newContact.company,
        newContact.email,
      ]);
      return newContact;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }

  static async update(id, name, phoneNumber, company, email) {
    const db = await conn();
    try {
      const updateContact = new Contact(name, phoneNumber, company, email);
      const query = `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`;
      await db.run(query, [
        updateContact.name,
        updateContact.phoneNumber,
        updateContact.company,
        updateContact.email,
        id,
      ]);
      return updateContact;
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
      const query = `DELETE FROM Contact WHERE id = ?`;
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
      const showContact = await db.all(
        `SELECT Contact.*, Groups.groupName FROM Contact 
         LEFT JOIN GroupContact ON Contact.id = GroupContact.ContactId 
         LEFT JOIN Groups ON GroupContact.GroupId = Groups.id`
      );
      return showContact;
    } catch (err) {
      console.log(err);
    } finally {
      if (db) {
        await db.close();
      }
    }
  }
}

module.exports = Contact;