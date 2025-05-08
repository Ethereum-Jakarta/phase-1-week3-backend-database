const Model = require('../model/groupModel');

const createGroups = async (req, res) => {
  try {
    const { groupName } = req.body;
    
    // Validasi req.body tidak boleh kosong
    if (groupName) {
      await Model.create(groupName);
      res.status(201).json({
        status: 201,
        code: 'Created',
        message: 'Groups created successfully',
      });
    } else {
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: 'groupName required',
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

const readGroups = async (req, res) => {
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

const updateGroups = async (req, res) => {
  try {
    const { groupName } = req.body;
    const { id } = req.params;

    if (groupName) {
      const result = await Model.update(id, groupName);
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
          message: `Group with id ${id} is not found`,
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        code: 'Bad Request',
        message: `groupName required`,
      });
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

const deleteGroups = async (req, res) => {
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
        message: `Group with id ${id} is not found`,
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

module.exports = { createGroups, readGroups, updateGroups, deleteGroups };
