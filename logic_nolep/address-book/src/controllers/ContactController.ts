import { ContactModel } from "../models/ContactModel.js";
import { View } from "../views/View.js";

export class ContactController {
    static async showAll() {
        try {
            const contacts = await ContactModel.findAllWithGroups();
            View.renderContacts(contacts);
        } catch (err) {
            View.renderError(err);
        }
    }

    static async addContact(name: string, phone: string, company: string, email: string) {
        try {
            const newContact = await ContactModel.create(name, phone, company, email);
            View.renderSuccess(`Contact ${newContact.name} created with ID ${newContact.id}`);
        } catch (err) {
            View.renderError(err);
        }
    }

    static async updateContact(id: number, name: string, phone: string, company: string, email: string) {
        try {
            const updated = await ContactModel.update(id, name, phone, company, email);
            if (!updated) {
                View.renderError(new Error(`Contact with ID ${id} not found.`))
            } else {
                View.renderSuccess(`Success update contact with ID ${updated.id}`);
            }
        } catch (err) {
            View.renderError(err)
        }
    }

    static async deleteContact(id: number) {
        try {
            const deleted = await ContactModel.delete(id);
            if (!deleted) {
                View.renderError(new Error(`Contact with ID ${id} not found.`));
            } else {
                View.renderSuccess(`Success delete contact with ID ${deleted.id}`);
            }
        } catch (err) {
            View.renderError(err);
        }
    }
}