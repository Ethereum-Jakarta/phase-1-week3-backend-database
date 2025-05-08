const View = require('../view');
const GroupContact = require('../models/groupContact');

class GroupContactController {
  static async create(contactId, groupId) {
    try {
      const result = await GroupContact.createTable(contactId, groupId);
      View.createView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async update(id, contactId, groupId) {
    try {
      const result = await GroupContact.updateTable(id, contactId, groupId);
      View.updateView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async delete(id) {
    try {
      const result = await GroupContact.deleteTable(id);
      View.deleteView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
}

module.exports = GroupContactController;
