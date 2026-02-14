const Contact = require("../models/contact")

class ContactController{
    static async create(req, res) {
        // name, PhoneNumber, company, email
        const {nama, phoneNumber, company, email} = req.body;

        try {
            await Contact.create(nama, phoneNumber, company, email);
            res.status(200).json({
                message: "Contact created successfully",
                data: {
                    nama, phoneNumber, company, email
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to create contact"
            })
        }
    }

    static async update(req, res) {
        // id, nama, phoneNumber, company, email
        const {id} = req.params
        const {nama, phoneNumber, company, email} = req.body;

        try {
            await Contact.update(id, nama, phoneNumber, company, email);
            res.status(200).json({
                message: "Contact updated successfully",
                data: {
                    nama, phoneNumber, company, email
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to update contact"
            })
        }
    }

    static async delete(req, res) {
        const {id} = req.params

        try {
            await Contact.delete(id);
            
            res.status(200).json({
                message: `Contact ${id} deleted successfully`
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to delete contact"
            })
        }
    }

    static async get(req, res) {
        const {id} = req.params;

        try {
            const contact = await Contact.get(id);

            res.status(200).json({
                message: `Data contact ${id}`,
                contact
            })
        } catch (error) {
            res.status(500).json({
                message: `Failed to get contact ${id}`
            })
        }
    }

    static async show(req, res) {
        try {
            const contacts = await Contact.show();
            res.status(200).json({
                message: "Get data successfully",
                contacts
            })
        } catch (error) {
            res.status(500).json({
                message: `Failed to get all contact`
            })
        }
    }
}

module.exports = ContactController