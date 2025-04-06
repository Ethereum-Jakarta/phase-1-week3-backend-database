const ModelContactGroup = require("../model/contactGroup");

const createContactGroup = async (req, res) => {
  try {
    const body = req.body;
    const result = await ModelContactGroup.createGroupContact(body.contactId, body.groupId);

    res.status(200).json({
      status: 200,
      message: "Succesc Create ContactGroups",
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

const updateContactGroup = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const result = await ModelContactGroup.updateGroupContact(body.contactId,body.groupId, id);

    res.status(200).json({
      status: 200,
      message: "Success Update ContactGroups",
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

const deleteContactGroup = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ModelContactGroup.deleteGroupContact(id);

    res.status(200).json({
      status: 200,
      message: "Success delete ContactGroups",
      contactGroupId: id,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = { createContactGroup, updateContactGroup, deleteContactGroup };
