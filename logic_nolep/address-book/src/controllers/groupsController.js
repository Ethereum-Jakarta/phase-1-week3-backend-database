const Groups = require("../models/groups");
const View = require("../views/view");

class GroupsController {
  static async createGroups(groupName) {
    try {
      const create = await Groups.create(groupName);
      View.createGroupsView(create);
    } catch (err) {
      console.log(err);
    }
  }

  static async updateGroups(id, groupName) {
    try {
      const update = await Groups.update(id, groupName);
      View.updateGroupsView(update);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteGroups(id) {
    try {
      await Groups.deleteByGroupId(id);
      await Groups.delete(id);
      View.deleteGroupsView();
    } catch (err) {
      console.error(err);
    }
  }

  static async showGroups() {
    try {
      const show = await Groups.showWithContacts();
      View.showGroupsView(show);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = GroupsController;