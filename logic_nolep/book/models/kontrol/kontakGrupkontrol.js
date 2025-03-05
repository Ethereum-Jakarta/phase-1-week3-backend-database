let ContactGroup = require("../kontakGrup");

class ContactGroupController {
    static async createContactGroup(contactId, groupId) {
        try {
            let id = await ContactGroup.create(contactId, groupId);
            console.log(`ContactGroup dengan ID ${id} berhasil dibuat.`);
        } catch (err) {
            console.error("Gagal menambahkan kontak ke grup:", err);
        }
    }
}

module.exports = ContactGroupController;