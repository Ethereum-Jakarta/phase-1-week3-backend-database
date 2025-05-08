const GroupContact = require('../models/groupContact');

class GroupContactController {
  static async getAllGroupContacts(req, res) {
    try {
      const data = await GroupContact.getAllGroupContacts();

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: 'Data not found' });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async getGroupContact(req, res) {
    try {
      const { id } = req.params;
      const data = await GroupContact.getGroupContact(id);

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async createGroupContact(req, res) {
    try {
      const { contactId, groupId } = req.body;
      const data = await GroupContact.createGroupContact(contactId, groupId);

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
  static async updateGroupContact(req, res) {
    try {
      const { id } = req.params;
      const { contactId, groupId } = req.body;

      const data = await GroupContact.updateGroupContact(
        id,
        contactId,
        groupId
      );

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async deleteGroupContact(req, res) {
    try {
      const { id } = req.params;
      const data = await GroupContact.deleteGroupContact(id);

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

module.exports = GroupContactController;
