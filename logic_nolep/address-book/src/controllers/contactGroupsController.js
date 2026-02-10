const ContactGroups = require("../models/contactGroups");
const View = require("../views/view");

class ContactGroupsController {
  static async createContactGroups(contactId, groupId) {
    try {
      const create = await ContactGroups.create(contactId, groupId);
      View.createContactGroupView(create);
    } catch (err) {
      View.errorView(err);
      console.log(err);
    }
  }
  static async updateContactGroups(id, contactId, groupId) {
    try {
      const update = await ContactGroups.update(id, contactId, groupId);
      View.updateContactGroupView(update);
    } catch (err) {
      View.errorView(err);
      console.log(err);
    }
  }
  static async deleteContactGroups(id) {
    try {
      await ContactGroups.delete(id);
      View.deleteContactGroupView();
    } catch (err) {
      View.errorView(err);
      console.log(err);
    }
  }

  static async help() {
    try {
      View.helpView();
    } catch (err) {
      View.errorView(err);
      console.log(err);
    }
  }
}

module.exports = ContactGroupsController;