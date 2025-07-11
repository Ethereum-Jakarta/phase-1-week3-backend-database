import db from './connection.js';

class ContactGroups {
    constructor(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static async create(contactId, groupId) {
        try {
            let newContactGroups = new ContactGroups(contactId, groupId);
            await db.run(`INSERT INTO groupContact (ContactId, GroupId) VALUES (?, ?)`, [newContactGroups.contactId, newContactGroups.groupId]);

            let show = await db.get(`SELECT * FROM groupContact WHERE ContactId = ? AND GroupId = ?`, [newContactGroups.contactId, newContactGroups.groupId]);
            return show;

        } catch (error) {
            return error;
        }
    }

    static async update(id, contactId, groupId) {
        try {
            let showBefore = await db.get(`SELECT * FROM groupContact WHERE id = ?`, [id]);

            let updateContactGroups = new ContactGroups(contactId, groupId);
            await db.run(`UPDATE groupContact SET ContactId = ?, GroupId = ? WHERE id = ?`, [updateContactGroups.contactId, updateContactGroups.groupId, id]);

            let showAfter = await db.get(`SELECT * FROM groupContact WHERE id = ?`, [id]);
            return [showBefore, showAfter];
        } catch (error) {
            return error;
        }
    }

    static async delete(id) {
        try {
            let deleted = await db.get(`SELECT * FROM groupContact WHERE id = ?`, [id]);
            await db.run(`DELETE FROM groupContact WHERE id = ?`, [id]);
            return deleted;
        } catch (error) {
            return error;
        }
    }
}

export default ContactGroups;