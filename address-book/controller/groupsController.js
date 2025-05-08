let Groups = require('../model/groupsModel.js');
let DataView = require('../view/view.js');

class GroupsController {
  static async create(groupName) {
    try {
      const data = await Groups.create(groupName);
      DataView.create(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async update(id, groupName) {
    try {
      const [currentData, updatedData] = await Groups.update(id, groupName);
      DataView.update(currentData, updatedData);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async delete(id) {
    try {
      const data = await Groups.delete(id);
      DataView.delete(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }

  static async show() {
    try {
      const data = await Groups.show();
      DataView.show(data);
    } catch (error) {
      DataView.errorView(error);
    }
  }
}

module.exports = GroupsController;
