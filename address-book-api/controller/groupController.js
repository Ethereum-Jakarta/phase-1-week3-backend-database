const ModelGroup = require("../model/group");

const createGroups = async (req, res) => {
  try {
    const body = req.body;
    const result = await ModelGroup.createGroups(body.groupName);

    res.status(200).json({
      status: 200,
      message: "Succesc Create Groups",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const updateGroups = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const result = await ModelGroup.updateGroups(
      body.groupName,
      id
    );

    res.status(200).json({
      status: 200,
      message: "Success Update Groups",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const deleteGroups = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ModelGroup.deleteGroups(id);

    res.status(200).json({
      status: 200,
      message: "Success delete Groups",
      data: id,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
const getGroups = async (req, res) => {
  try {
    const result = await ModelGroup.getGroups();

    res.status(200).json({
      status: 200,
      message: "Success Get Data Groups",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { createGroups, updateGroups, deleteGroups, getGroups };
