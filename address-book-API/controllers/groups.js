const Groups = require('../models/groups');

class GroupsController {
  static async getAllGroups(req, res) {
    try {
      const data = await Groups.getAllGroups();

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: 'Data not found' });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async getGroups(req, res) {
    try {
      const { id } = req.params;
      const data = await Groups.getGroups(id);

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async createGroups(req, res) {
    try {
      const { groupName } = req.body;
      const data = await Groups.createGroups(groupName);

      res.status(201).json({
        status: 'success',
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
  static async updateGroups(req, res) {
    try {
      const { id } = req.params;
      const { groupName } = req.body;

      const data = await Groups.updateGroups(id, groupName);

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async deleteGroups(req, res) {
    try {
      const { id } = req.params;
      const data = await Groups.deleteGroups(id);

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
}

module.exports = GroupsController;
