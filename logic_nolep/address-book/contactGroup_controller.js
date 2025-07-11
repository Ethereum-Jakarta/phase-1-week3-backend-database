import BookView from "./view.js";
import ContactGroups from "./contactGroups_model.js";

class ContactGroupsController {
    static async create(contactId, groupId) {
        try {
            let buat = await ContactGroups.create(contactId, groupId);
            BookView.createContactGroups(buat);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async update(id, contactId, groupId) {
        try {
            let ubah = await ContactGroups.update(id, contactId, groupId);
            BookView.updateContactGroups(ubah);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async delete(id) {
        try {
            let hapus = await ContactGroups.delete(id);
            BookView.deleteContactGroups(hapus);
        } catch (error) {
            BookView.errorView(error);
        }
    }
}

export default ContactGroupsController;