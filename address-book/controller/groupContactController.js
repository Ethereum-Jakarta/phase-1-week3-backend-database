const ContactGroupModel = require("../model/groupContactModel");
const view = require("../view/view");

class ContactGroupController {
  static async createContactGroup(contact, group) {
    try {
      const result = await ContactGroupModel.createContactGroup(contact, group);
      view.createContactGroupView(result);
    } catch (err) {
      view.errView(err);
    }
  }

  static async showContactGroup() {
    try {
      const result = await ContactGroupModel.showContactGroup();
      view.showContactGroup(result);
    } catch (err) {
      view.errView(err);
    }
  }

  static async deleteContactGroup(id) {
    try {
      const result = await ContactGroupModel.deleteContactGroup(id);
      view.deleteContactGroupView(result);
    } catch (err) {
      view.errView(err);
    }
  }

  static async updateContactGroup(id, contact, group) {
    try {
      const result = await ContactGroupModel.updateContactGroup(
        id,
        contact,
        group
      );
      view.updateContactGroupView(result);
    } catch (err) {
      view.errView(err);
    }
  }
}

module.exports = ContactGroupController;
