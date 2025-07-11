import db from './connection.js';

class Groups {
    constructor(groupName) {
        this.groupName = groupName;
    }

    static async create(groupName) {
        try {
            let newGroups = new Groups(groupName);
            await db.run(`INSERT INTO Groups (groupName) VALUES (?)`, [newGroups.groupName]);

            let show = await db.get(`SELECT * FROM Groups WHERE groupName = ?`, [newGroups.groupName]);
            return show;

        } catch (error) {
            return error;
        }
    }

    static async update(id, groupName) {
        try {
            let showBefore = await db.get(`SELECT * FROM Groups WHERE id = ?`, [id]);
            let updateGroups = new Groups(groupName);
            await db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [updateGroups.groupName, id]);

            let showAfter = await db.get(`SELECT * FROM Groups WHERE groupName = ?`, [updateGroups.groupName]);
            return [showBefore, showAfter];

        } catch (error) {
            return error;
        }
    }

    static async delete(id) {
        try {
            let deletedGroups = await db.get(`SELECT * FROM Groups WHERE id = ?`, [id]);
            await db.run(`DELETE FROM Groups WHERE id = ?`, [id]);

            // hapus di ContactGroups juga
            await db.run(`DELETE FROM GroupContact WHERE GroupId = ?`, [id]);

            return deletedGroups;

        } catch (error) {
            return error;
        }
    }

    static async showGroups() {
        try {
            let show = await db.all(`SELECT Groups.id, Groups.groupName, group_concat(Contact.name, ', ') AS members
                                    FROM Groups
                                    JOIN GroupContact ON Groups.id = GroupContact.GroupId
                                    JOIN Contact ON GroupContact.ContactId = Contact.id
                                    GROUP BY Groups.id`);
            return show;
        } catch (error) {
            return error;
        }
    }
}

export default Groups;