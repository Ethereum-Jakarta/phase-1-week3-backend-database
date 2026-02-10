const ContactGroups = require("../models/contactGroup");

class contactGroupController {
  // Create a new contact group association
  static async createContactGroup(req, res) {
    const { ContactId, GroupId } = req.body;

    if (!ContactId || !GroupId) {
      return res.status(400).json({ message: "ContactId and GroupId are required." });
    }

    try {
      const create = await ContactGroups.create(ContactId, GroupId);
      await create.save();
      return res.status(201).json({ message: "Success create contact groups!", contactGroup: create });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating contact groups!", error: error.message });
    }
  }

  // Update an existing contact group association
  static async updateContactGroup(req, res) {
    const { id } = req.params;
    const { ContactId, GroupId } = req.body;

    if (!ContactId || !GroupId) {
      return res.status(400).json({ message: "ContactId and GroupId are required." });
    }

    try {
      const update = await ContactGroups.update(id, ContactId, GroupId);
      if (!update) {
        return res.status(404).json({ message: "Contact group not found" });
      }
      await update.save();
      return res.status(200).json({ message: "Success update contact groups!", contactGroup: update });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error updating contact groups!", error: error.message });
    }
  }

  // Delete a contact group association
  static async deleteContactGroup(req, res) {
    const { id } = req.params;

    try {
      const deleted = await ContactGroups.delete(id);
      if (!deleted) {
        return res.status(404).json({ message: "Contact group not found" });
      }
      return res.status(200).json({ message: "Success delete contact groups!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error deleting contact groups!", error: error.message });
    }
  }
}

module.exports = contactGroupController;
