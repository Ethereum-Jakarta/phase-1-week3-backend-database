const ContactGroup = require("../model/contactGroup");

class ContactGroupController {
    static async createContactGroup(req, res) {
        const { contactId, groupId } = req.body;
        try {
            await ContactGroup.create(contactId, groupId);
            res.status(201).json({ message: "Contact added to group successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async updateContactGroup(req, res) {
        const { id } = req.params;
        const { contactId, groupId } = req.body;
        try {
            await ContactGroup.update(id, contactId, groupId);
            res.status(200).json({ message: "Contact group updated successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async deleteContactGroup(req, res) {
        const { id } = req.params;
        try {
            await ContactGroup.delete(id);
            res.status(200).json({ message: "Contact removed from group successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ContactGroupController;