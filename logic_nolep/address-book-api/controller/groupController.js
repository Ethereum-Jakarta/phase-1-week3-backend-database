const Groups = require('../model/groups');

class groupController {

    static getGroups(req, res) {
        Groups.getGroups((err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(200).json(data);
            }
        });
    }

    static create(req, res) {
        const { groupName } = req.body;
        Groups.create(groupName, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(data);
            }
        })
    }

    static update(req, res) {
        const { id } = req.params;
        const { groupName } = req.body;
        Groups.update(id, groupName, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({
                    message: 'Group updated successfully',
                    before: data.before,
                    after: data.after
                });
            }
        });
    }

    static delete(req, res) {
        const { id } = req.params;
        Groups.delete(id, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(204).json({ deletedData: data });
            }
        })
    }
}

module.exports = groupController;