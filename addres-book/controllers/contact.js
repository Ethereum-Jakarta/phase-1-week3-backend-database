const View = require('../view');
const Contact = require('../models/contact');

class ContactController {
  static async create(name, phoneNumber, company, email) {
    try {
      const result = await Contact.createTable(
        name,
        phoneNumber,
        company,
        email
      );
      View.createView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async update(id, name, phoneNumber, company, email) {
    try {
      const result = await Contact.updateTable(
        id,
        name,
        phoneNumber,
        company,
        email
      );
      View.updateView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async delete(id) {
    try {
      const result = await Contact.deleteTable(id);
      View.deleteView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async showContact() {
    try {
      const data = await Contact.showContact();
      View.showView(data);
    } catch (error) {
      View.errorView(error);
    }
  }
}

module.exports = ContactController;
