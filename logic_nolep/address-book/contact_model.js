import db from "./connection.js";

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static async create(name, phoneNumber, company, email) {
        try {
            let newContact = new Contact(name, phoneNumber, company, email);
            await db.run('INSERT INTO Contact VALUES (null, ?, ?, ?, ?)', [newContact.name, newContact.phoneNumber, newContact.company, newContact.email]);

            let show = await db.get(`SELECT * FROM Contact WHERE name = ?`, [newContact.name]);
            return show;

        } catch (error) {
            return error;
        }
    }

    static async update(id, name, phoneNumber, company, email) {
        try {
            let showBefore = await db.get(`SELECT * FROM Contact WHERE id = ?`, [id]);

            let updateContact = new Contact(name, phoneNumber, company, email);
            await db.run(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`, [updateContact.name, updateContact.phoneNumber, updateContact.company, updateContact.email, id]);

            let showAfter = await db.get(`SELECT * FROM Contact WHERE name = ?`, [updateContact.name]);
            return [showBefore, showAfter];

        } catch (error) {
            return error;
        }
    }

    static async delete(id) {
        try {
            let deleted = await db.get(`SELECT * FROM Contact WHERE id = ?`, [id]);
            await db.run(`DELETE FROM Contact WHERE id = ?`, [id]);
            return deleted;
        } catch (error) {
            return error;
        }
    }

    static async showContact() {
        try {
            let show = await db.all(`SELECT Contact.id, Contact.name, group_concat(Groups.groupName, ', ') AS groups_joined
                                    FROM Contact
                                    JOIN GroupContact ON Contact.id = GroupContact.ContactId
                                    JOIN Groups ON GroupContact.GroupId = Groups.id
                                    GROUP BY Contact.id`);
            return show;
        } catch (error) {
            return error;
        }
    }
}

export default Contact;