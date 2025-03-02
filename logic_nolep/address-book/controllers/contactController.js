const Contact = require("../models/contact");
const view = require("../views/view");

class ContactController {
    static async create(name, phoneNumber, company, email) {
        try {
            await Contact.create(name, phoneNumber, company, email);
            view.successMessage("Contact created successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async update(id, name, phoneNumber, company, email) {
        try {
            await Contact.update(id, name, phoneNumber, company, email);
            view.successMessage("Contact updated successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async delete(id) {
        try {
            await Contact.delete(id);
            view.successMessage("Contact deleted successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async show() {
        try {
            const contacts = await Contact.show();
            view.displayContacts(contacts);
        } catch (error) {
            view.errorMessage(error.message);
        }
    }
}

module.exports = ContactController;