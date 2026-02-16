const Contact = require('../model/contact');

class contactController {

    static getContacts(req, res) {
        Contact.getContacts((err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json(data);
            }
        })
    }

    static create(req, res) {
        const { name, phoneNumber, company, email } = req.body;
        Contact.create(name, phoneNumber, company, email, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(data);
            }
        })

    }

    static update(req, res) {
        const { id } = req.params;
        const { name, phoneNumber, company, email } = req.body;
        Contact.update(id, name, phoneNumber, company, email, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({
                    message: 'Contact updated successfully',
                    before: data.before,
                    after: data.after
                });
            }
        });
    }

    static delete(req, res) {
        const { id } = req.params;
        Contact.delete(id, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).json({ deletedData: data });
            }
        });
    }
}

module.exports = contactController;