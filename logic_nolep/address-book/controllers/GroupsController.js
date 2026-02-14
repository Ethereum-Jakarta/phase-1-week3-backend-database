const Groups = require("../models/groups")
const GroupsView = require("../views/groupsView")

class GroupsController{
    static async create(groupName) {
        try {
            await Groups.create(groupName);
            GroupsView.createSuccess(groupName)
        } catch (error) {
            GroupsView.createError()
        }
    }

    static async update(id, groupName) {
        try {
            await Groups.update(id, groupName);
            GroupsView.updateSuccess(groupName)
        } catch (error) {
            GroupsView.updateError()
        }
    }

    static async delete(id) {
        try {
            await Groups.delete(id)
            GroupsView.deleteSuccess()
        } catch (error) {
            GroupsView.deleteError()
        }
    }

    static async get(id) {
        try {
            const contact = await(Groups.get(id))

            if (!contact) {
                return GroupsView.getError(id)
            }

            GroupsView.getSuccess(contact);
        } catch (error) {
            GroupsView.getError(id)
        }
    }

    static async show(IDGroup) {
        console.log("ID:",IDGroup)
        try {
            const results = await(Groups.show(IDGroup))
            GroupsView.showSuccess(results);
        } catch (error) {
            GroupsView.showError()
        }
    }

    static async allGroups() {
        try {
            const results = await(Groups.allGroups())
            GroupsView.allGroupSuccess(results);
        } catch (error) {
            GroupsView.showError()
        }
    }

}

module.exports = GroupsController