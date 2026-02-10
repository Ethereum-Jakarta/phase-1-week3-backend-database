const Contact = require("../models/contact");
const View = require("../views/view");

class ContactController {
  static async createContact(name, phoneNumber, company, email) {
    try {
      const create = await Contact.create(name, phoneNumber, company, email);
      View.createContactView(create);
    } catch (err) {
      console.log(err);
    }
  }

  static async updateContact(id, name, phoneNumber, company, email) {
    try {
      const update = await Contact.update(
        id,
        name,
        phoneNumber,
        company,
        email
      );
      View.updateContactView(update);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteContact(id) {
    try {
      await Contact.delete(id);
      View.deleteContactView(id);
    } catch (err) {
      console.log(err);
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

module.exports = ContactController;