const Group = require("../model/group");

class GroupController {
    static async getGroups(req, res) {
        try {
            const groups = await Group.show();
            res.status(200).json(groups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createGroups(req, res) {
        const { groupName } = req.body;
        try {
            await Group.create(groupName);
            res.status(201).json({ message: "Group created successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async updateGroups(req, res) {
        const { id } = req.params;
        const { groupName } = req.body;
        try {
            await Group.update(id, groupName);
            res.status(200).json({ message: "Group updated successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async deleteGroups(req, res) {
        const { id } = req.params;
        try {
            await Group.delete(id);
            res.status(200).json({ message: "Group deleted successfully!" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = GroupController;