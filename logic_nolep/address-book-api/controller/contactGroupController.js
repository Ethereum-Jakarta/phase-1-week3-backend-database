const contactGroup = require('../model/contactGroup');

class contactGroupController {
    static create(req, res) {
        const { contactId, groupId } = req.body;
        contactGroup.create(contactId, groupId, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(data);
            }
        });
    }

    static update(req, res) {
        const { id } = req.params;
        const { contactId, groupId } = req.body;
        contactGroup.update(id, contactId, groupId, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({
                    message: 'ContactGroup updated successfully',
                    before: data.before,
                    after: data.after
                });
            }
        });
    }

    static delete(req, res) {
        const { id } = req.params;
        contactGroup.delete(id, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).json({ deletedData: data });
            }
        })
    }
}

module.exports = contactGroupController;