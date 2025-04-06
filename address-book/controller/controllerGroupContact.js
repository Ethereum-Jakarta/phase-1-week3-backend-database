let  GroupContact = require("../model/groupContact");
let View = require("../view/view");

class ControllerGroupContact {
  static createContactGroups(contactId, groupId) {
    GroupContact.createGroupContact(contactId, groupId)
      .then(() => {
        View.createContactGroupsView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static updateContactGroups(id, contactId, groupId) {
    GroupContact.updateGroupContact(id, contactId, groupId)
      .then(() => {
        View.updateContactGroupView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static deleteContactGroups(id) {
    GroupContact.deleteGroupContact(id)
      .then(() => {
        View.deleteContactGroupView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static help() {
    View.helpView();
  }
}

module.exports = ControllerGroupContact;
