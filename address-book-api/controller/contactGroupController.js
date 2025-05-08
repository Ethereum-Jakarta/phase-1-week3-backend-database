const Model = require('../model/contactGroupModel');

const createContactGroup = async (req, res) => {
  try {
    const { contactId, groupId } = req.body;

    // Validasi req.body tidak boleh kosong
    const requiredFields = { contactId, groupId };
    const missingFields = Object.keys(requiredFields).filter(
      (key) => !requiredFields[key]
    );

    if (missingFields.length > 0) {
      const errorMessage = missingFields
        .map((field) => `${field} required`)
        .join(', ');
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: errorMessage,
      });
    } else {
      await Model.create(contactId, groupId);
      res.status(201).json({
        status: 201,
        code: 'OK',
        message: 'GroupContact created successfully',
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

const updateContactGroup = async (req, res) => {
  try {
    const { contactId, groupId } = req.body;
    const { id } = req.params;

    // Validasi req.body tidak boleh kosong dan id harus valid
    const requiredFields = { contactId, groupId };
    const missingFields = Object.keys(requiredFields).filter(
      (key) => !requiredFields[key]
    );

    if (missingFields.length > 0) {
      const errorMessage = missingFields
        .map((field) => `${field} required`)
        .join(', ');
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: errorMessage,
      });
    } else {
      const result = await Model.update(id, contactId, groupId);
      if (result) {
        res.status(200).json({
          status: 200,
          code: 'OK',
          message: 'GroupContact updated successfully',
        });
      } else {
        res.status(404).json({
          status: 404,
          code: 'Not Found',
          message: `GroupContact with id ${id} is not found`,
        });
      }
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

const deleteContactGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Model.deleted(id);
    if (result) {
      res.status(200).json({
        status: 200,
        code: 'OK',
        message: 'GroupContact deleted successfully',
      });
    } else {
      res.status(404).json({
        status: 404,
        code: 'Not Found',
        message: `GroupContact with id ${id} is not found`,
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

module.exports = { createContactGroup, updateContactGroup, deleteContactGroup };
