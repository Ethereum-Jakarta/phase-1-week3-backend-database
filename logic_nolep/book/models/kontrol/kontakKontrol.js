let Contact = require("../kontak");

class ContactController {
    static async createContact(name, phoneNumber, company, email) {
        try {
            let id = await Contact.create(name, phoneNumber, company, email);
            console.log(`Contact dengan ID ${id} berhasil dibuat.`);
        } catch (err) {
            console.error("Gagal membuat kontak:", err);
        }
    }
}

module.exports = ContactController;