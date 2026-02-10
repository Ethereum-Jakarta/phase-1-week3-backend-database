const Contact = require("../models/contact");

class contactController {
  static async getContacts(req, res) {
    try {
      const contacts = await Contact.showWithGroups();
      res.json(contacts);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving contacts");
    }
  }

  static async createContact(req, res) {
    const { name, phoneNumber, company, email } = req.body;
    try {
      const create = await Contact.create(name, phoneNumber, company, email);
      await create.save();
      res.status(200).json({ message: "Success create contact!" });
    } catch (error) {
      res.status(500).json({ message: "Error create contact!", error });
    }
  }

  static async updateContact(req, res) {
    const { id } = req.params;
    const { name, phoneNumber, company, email } = req.body;
    try {
      const update = await Contact.update(
        id,
        name,
        phoneNumber,
        company,
        email
      );
      await update.save();
      res.status(200).json({ message: "Success update contact!" });
    } catch (error) {
      res.status(500).json({ message: "Error update contact!", error });
    }
  }

  static async deleteContact(req, res) {
    const { id } = req.params;
    try {
      await Contact.delete(id);
      res.status(200).json({ message: "Success delete contact!" });
    } catch (error) {
      res.status(500).json({ message: "Error delete contact!", error });
    }
  }

  static async showContact() {
    try {
      const showContact = await Contact.showWithGroups();
      View.showContact(showContact);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = contactController;
