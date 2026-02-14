const ContactGroups = require("../models/contactGroups")
const ContactGroupsView = require("../views/contactGroupsView")

class ContactGroupsController{
    static async create(IDContact, IDGroup) {
        try {
            await ContactGroups.create(IDContact, IDGroup);
            ContactGroupsView.createSuccess()
        } catch (error) {
            ContactGroupsView.createError()
        }
    }

    static async update(id, IDContact, IDGroup) {
        try {
            await ContactGroups.update(id, IDContact, IDGroup);
            console.log(id, IDContact, IDGroup)
            ContactGroupsView.updateSuccess()
        } catch (error) {
            ContactGroupsView.updateError()
        }
    }

    static async delete(id) {
        try {
            await ContactGroups.delete(id)
            ContactGroupsView.deleteSuccess()
        } catch (error) {
            ContactGroupsView.deleteError()
        }
    }

    static async get(id) {
        try {
            const contact = await(ContactGroups.get(id))

            if (!contact) {
                return ContactGroupsView.getError(id)
            }

            ContactGroupsView.getSuccess(contact);
        } catch (error) {
            ContactGroupsView.getError(id)
        }
    }

    static async show() {
        try {
            const results = await(ContactGroups.show())
            ContactGroupsView.showSuccess(results);
        } catch (error) {
            ContactGroupsView.showError()
        }
    }

}

module.exports = ContactGroupsController