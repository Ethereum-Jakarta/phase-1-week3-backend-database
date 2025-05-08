const Contact = require('../models/contact');

class ContactController {
  static async getAllContacts(req, res) {
    try {
      const data = await Contact.getAllContacts();

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: 'Data not found' });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async getContact(req, res) {
    try {
      const { id } = req.params;
      const data = await Contact.getContact(id);

      if (!data)
        return res
          .status(404)
          .json({ status: 'fail', message: `No Data with ID ${id}` });

      res.status(200).json({ status: 'success', data: data });
    } catch (error) {
      res.status(400).json({ status: 'fail', message: error.message });
    }
  }
  static async createContact(req, res) {
    try {
      const { name, phoneNumber, company, email } = req.body;
      const data = await Contact.createContact(
        name,
        phoneNumber,
        company,
        email
      );

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
  static async updateContact(req, res) {
    try {
      const { id } = req.params;
      const { name, phoneNumber, company, email } = req.body;

      const data = await Contact.updateContact(
        id,
        name,
        phoneNumber,
        company,
        email
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
  static async deleteContact(req, res) {
    try {
      const { id } = req.params;
      const data = await Contact.deleteContact(id);

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

module.exports = ContactController;
