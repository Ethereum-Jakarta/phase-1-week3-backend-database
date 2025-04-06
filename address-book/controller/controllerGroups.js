let Groups = require("../model/groups");
let View = require("../view/view");

class ControllerGroups {
  static createGroup(groupName) {
    Groups.createGroup(groupName)
      .then(() => {
        View.createGroupView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static updateGroup(id, groupName) {
    Groups.updateGroup(id, groupName)
      .then(() => {
        View.updateGroupView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static deleteGroup(id) {
    Groups.deleteGroup(id)
      .then(() => {
        View.deleteGroupView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static showGroups() {
    Groups.showGroups()
      .then((data) => {
        View.showGroupsView(data);
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static help() {
    View.helpView();
  }
}

module.exports = ControllerGroups;
