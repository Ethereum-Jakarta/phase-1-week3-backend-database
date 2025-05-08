const View = require('../view');
const Groups = require('../models/groups');

class GroupsController {
  static async create(groupName) {
    try {
      const result = await Groups.createTable(groupName);
      View.createView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async update(id, groupName) {
    try {
      const result = await Groups.updateTable(id, groupName);
      View.updateView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async delete(id) {
    try {
      const result = await Groups.deleteTable(id);
      View.deleteView(result);
    } catch (error) {
      View.errorView(error);
    }
  }
  static async showGroups() {
    try {
      const data = await Groups.showGroups();
      View.showView(data);
    } catch (error) {
      View.errorView(error);
    }
  }
}

module.exports = GroupsController;
