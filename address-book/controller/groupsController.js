const groupModel = require("../model/groupModel");
const view = require("../view/view");

class groupController {
  static async createGroup(groupName) {
    try {
      await groupModel.createGroup(groupName);
      view.createGroupView(groupName);
    } catch (err) {
      view.errView(err);
    }
  }

  static async showGroups() {
    try {
      const result = await groupModel.showGroups();
      view.showGroups(result);
    } catch (err) {
      view.errView(err);
    }
  }

  static async deleteGroups(id) {
    try {
      const result = await groupModel.deleteGroups(id);
      view.deleteGroups(result);
    } catch (err) {
      view.errView(err);
    }
  }

  static async updateGroups(id, groupName) {
    try {
      const result = await groupModel.updateGroups(id, groupName);
      view.updateGroups(result);
    } catch (err) {
      view.errView(err);
    }
  }
}

module.exports = groupController;
