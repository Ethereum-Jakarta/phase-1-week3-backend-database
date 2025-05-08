let Contact = require('../model/contactModel.js');
let DataView = require('../view/view.js');

class ContactController {
  static async create(name, phoneNumber, company, email) {
    try {
      const data = await Contact.create(name, phoneNumber, company, email);
      DataView.create(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async update(id, name, phoneNumber, company, email) {
    try {
      const [currentData, updatedData] = await Contact.update(id, name, phoneNumber, company, email);
      DataView.update(currentData, updatedData);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async delete(id) {
    try {
      const data = await Contact.delete(id);
      DataView.delete(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async show() {
    try {
      const data = await Contact.show();
      DataView.show(data);
    } catch (error) {
      DataView.errorView(error)
    }
  }
}

module.exports = ContactController;
