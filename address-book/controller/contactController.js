const ContactModel = require("../model/contactModel");
const view = require("../view/view");

class ContactController {
  static help() {
    view.help();
  }

  static async createContact(name, phoneNumber, company, email) {
    try {
      await ContactModel.createContact(name, phoneNumber, company, email);
      view.createContactView(name, phoneNumber, company, email);
    } catch (err) {
      view.errView(err);
    }
  }

  static async showContact() {
    try {
      const result = await ContactModel.showContact();
      view.showContactView(result);
    } catch (error) {
      view.errView(error);
    }
  }

  static async deleteContact(id) {
    try {
      const data = await ContactModel.deleteContact(id);
      view.deleteContact(data);
    } catch (error) {
      view.errView(error);
    }
  }

  static async updateContact(id, name, phoneNumber, company, email) {
    try {
      const result = await ContactModel.updateContact(
        id,
        name,
        phoneNumber,
        company,
        email
      );
      view.updateContactView(result);
    } catch (error) {
      view.errView(error);
    }
  }
}

module.exports = ContactController;
