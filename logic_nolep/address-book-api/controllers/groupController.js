const Groups = require("../models/group");

class groupController {
  static async getGroups(req, res) {
    try {
      const groups = await Groups.showWithGroups();
      res.json(groups);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving groups");
    }
  }

  static async createGroup(req, res) {
    const { groupName } = req.body;

    if (!groupName) {
      return res.status(400).json({ message: "Group name is required." });
    }

    try {
      const create = await Groups.create(groupName);
      await create.save();
      return res.status(201).json({ message: "Success create group!", group: create });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating group!", error: error.message });
    }
  }

  static async updateGroup(req, res) {
    const { id } = req.params;
    const { groupName } = req.body;

    if (!groupName) {
      return res.status(400).json({ message: "Group name is required." });
    }

    try {
      const update = await Groups.update(id, groupName);
      if (!update) {
        return res.status(404).json({ message: "Group not found" });
      }
      await update.save();
      return res.status(200).json({ message: "Success update group!", group: update });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error updating group!", error: error.message });
    }
  }

  static async deleteGroup(req, res) {
    const { id } = req.params;

    try {
      const deleted = await Groups.delete(id);
      if (!deleted) {
        return res.status(404).json({ message: "Group not found" });
      }
      return res.status(200).json({ message: "Success delete group!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error deleting group!", error: error.message });
    }
  }

  static async showGroup() {
    try {
      const showGroup = await Groups.showWithGroups();
      View.showGroup(showGroup);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = groupController;
