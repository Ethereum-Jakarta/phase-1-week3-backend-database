const Model = require('../model/contactModel');

const createContact = async (req, res) => {
  try {
    const { name, phoneNumber, company, email } = req.body;

    // Validasi req.body tidak boleh kosong
    const requiredFields = { name, phoneNumber, company, email };
    const missingFields = Object.keys(requiredFields).filter((key) => !requiredFields[key]);

    if (missingFields.length > 0) {
      const errorMessage = missingFields.map((field) => `${field} required`).join(', ');
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: errorMessage,
      });
    } else {
      await Model.create(name, phoneNumber, company, email);
      res.status(201).json({
        status: 201,
        code: 'Created',
        message: 'Contact created successfully',
      });
    }
  } catch (error) {
    if (error.code.includes('SQLITE_CONSTRAINT')) {
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: 'Contact not created. Parameter is invalid',
        error: error,
      });
    } else {
      res.status(500).json({
        status: 500,
        code: 'Internal Server Error',
        message:
          'An internal error occurred on the server. Please try again later',
        error: error,
      });
    }
  }
};

const readContact = async (req, res) => {
  try {
    const result = await Model.read();

    if (result) {
      res.status(200).json({
        status: 200,
        code: 'OK',
        message: 'Successfully retrieved data',
        data: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        code: 'Not Found',
        message: 'Data not found or empty',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      code: 'Internal Server Error',
      message:
        'An internal error occurred on the server. Please try again later',
      error: error,
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const { name, phoneNumber, company, email } = req.body;
    const { id } = req.params;

    // Validasi req.body tidak boleh kosong dan id harus valid
    const requiredFields = { name, phoneNumber, company, email };
    const missingFields = Object.keys(requiredFields).filter((key) => !requiredFields[key]);

    if (missingFields.length > 0) {
      const errorMessage = missingFields.map((field) => `${field} required`).join(', ');
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: errorMessage,
      });
    } else {
      const result = await Model.update(id, name, phoneNumber, company, email);
      if (result) {
        res.status(200).json({
          status: 200,
          code: 'OK',
          message: 'Contact updated successfully',
        });
      } else {
        res.status(404).json({
          status: 404,
          code: 'Not Found',
          message: `User with id ${id} is not found`,
        });
      }
    }
  } catch (error) {
    if (error.code.includes('SQLITE_CONSTRAINT')) {
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: 'Update is failed. Parameter is invalid',
        error: error,
      });
    } else {
      res.status(500).json({
        status: 500,
        code: 'Internal Server Error',
        message:
          'An internal error occurred on the server. Please try again later',
        error: error,
      });
    }
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Model.deleted(id);
    if (result) {
      res.status(200).json({
        status: 200,
        code: 'OK',
        message: 'Contact deleted successfully',
      });
    } else {
      res.status(404).json({
        status: 404,
        code: 'Not Found',
        message: `User with id ${id} is not found`,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      code: 'Internal Server Error',
      message:
        'An internal error occurred on the server. Please try again later',
      error: error,
    });
  }
};

module.exports = { createContact, readContact, updateContact, deleteContact };
