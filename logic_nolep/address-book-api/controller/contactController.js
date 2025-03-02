const Contact = require("../model/contact");

class ContactController {
    // Mendapatkan semua kontak
    static async getContacts(req, res) {
        try {
            const contacts = await Contact.show();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Membuat kontak baru
    static async createContact(req, res) {
        const { name, phoneNumber, company, email } = req.body;
        try {
            await Contact.create(name, phoneNumber, company, email);
            res.status(201).json({ message: "Contact created successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Memperbarui kontak yang ada
    static async updateContact(req, res) {
        const { id } = req.params;
        const { name, phoneNumber, company, email } = req.body;
        try {
            await Contact.update(id, name, phoneNumber, company, email);
            res.status(200).json({ message: "Contact updated successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Menghapus kontak
    static async deleteContact(req, res) {
        const { id } = req.params;
        try {
            await Contact.delete(id);
            res.status(200).json({ message: "Contact deleted successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ContactController;