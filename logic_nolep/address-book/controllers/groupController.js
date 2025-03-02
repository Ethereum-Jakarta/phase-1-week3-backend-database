const Group = require("../models/group");
const view = require("../views/view");

class GroupController {
    static async create(groupName) {
        try {
            await Group.create(groupName);
            view.successMessage("Group created successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async update(id, groupName) {
        try {
            await Group.update(id, groupName);
            view.successMessage("Group updated successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async delete(id) {
        try {
            await Group.delete(id);
            view.successMessage("Group deleted successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async show() {
        try {
            const groups = await Group.show();
            view.displayGroups(groups);
        } catch (error) {
            view.errorMessage(error.message);
        }
    }
}

module.exports = GroupController;