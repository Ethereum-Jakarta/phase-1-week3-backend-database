let DataView = require('../view/view.js');
let GroupContact = require('../model/groupContactModel.js');

class GroupContactController {
  static async create(contactId, groupId) {
    try {
      const data = await GroupContact.create(contactId, groupId);
      DataView.create(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async update(id, contactId, groupId) {
    try {
      const [currentData, updatedData] = await GroupContact.update(
        id,
        contactId,
        groupId
      );
      DataView.update(currentData, updatedData);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async delete(id) {
    try {
      const data = await GroupContact.delete(id);
      DataView.delete(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }
}

module.exports = GroupContactController;
