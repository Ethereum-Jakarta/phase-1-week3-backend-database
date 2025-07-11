import Contact from './contact_model.js';
import BookView from './view.js';

class ContactController {
    static async create(name, phoneNumber, company, email) {
        try {
            let buat = await Contact.create(name, phoneNumber, company, email);
            BookView.createContact(buat);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async update(id, name, phoneNumber, company, email) {
        try {
            let ubah = await Contact.update(id, name, phoneNumber, company, email);
            BookView.updateContact(ubah);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async delete(id) {
        try {
            let hapus = await Contact.delete(id);
            BookView.deleteContact(hapus);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async showContact() {
        try {
            let result = await Contact.showContact();
            BookView.showContact(result);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static help() {
        BookView.helpView();
    }
}

export default ContactController;