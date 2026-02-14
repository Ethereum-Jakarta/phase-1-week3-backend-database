const Contact = require("../models/contact")
const ContactView = require("../views/contactView")

class ContactController{
    static async create(nama, PhoneNumber, company, email) {
        try {
            await Contact.create(nama, PhoneNumber, company, email);
            ContactView.createSuccess(nama)
        } catch (error) {
            ContactView.createError()
        }
    }

    static async update(id, nama, phoneNumber, company, email) {
        try {
            await Contact.update(id, nama, phoneNumber, company, email);
            ContactView.updateSuccess(nama)
        } catch (error) {
            ContactView.updateError()
        }
    }

    static async delete(id) {
        try {
            await Contact.delete(id)
            ContactView.deleteSuccess()
        } catch (error) {
            ContactView.deleteError()
        }
    }

    static async get(id) {
        try {
            const contact = await(Contact.get(id))

            if (!contact) {
                return ContactView.getError(id)
            }

            ContactView.getSuccess(contact);
        } catch (error) {
            ContactView.getError(id)
        }
    }

    static async show() {
        try {
            const contacts = await(Contact.show())
            ContactView.showSuccess(contacts);
        } catch (error) {
            ContactView.showError()
        }
    }

    static async allContacts() {
        try {
            const contacts = await(Contact.allContacts())
            ContactView.allContactsSuccess(contacts)
        } catch (error) {
            ContactView.allContactsError()
        }
    }

}

module.exports = ContactController