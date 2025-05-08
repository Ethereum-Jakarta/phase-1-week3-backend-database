const Model = require("../model/contactGroupModel");

const readContactGroup = async (req, res) => {
  try {
    const associations = await Model.readAll(); // Assumes a method to fetch all associations
    res.status(200).json({
      message: "Contact-Group associations retrieved successfully",
      data: associations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve associations",
      error: error.message,
    });
  }
};


const createContactGroup = async (req, res) => {
  const { contactId, groupId } = req.body;
  console.log('req.body =',req.body);

  if (!contactId || !groupId) {
    return res.status(400).json({ message: "Both contactId and groupId are required" });
  }

  try {
    // Check if the association already exists
    const existingAssociation = await Model.findAssociation(contactId, groupId);
    if (existingAssociation) {
      return res.status(409).json({ message: "This contact is already associated with this group" });
    }

    // Proceed to create a new association if it doesn't exist
    const newAssociation = await Model.create(contactId, groupId);
    res.status(201).json({ message: "Association created successfully", data: newAssociation });
  } catch (error) {
    res.status(500).json({ message: "Error creating association", error: error.message });
  }
};


const updateContactGroup = async (req, res) => {
  const { id } = req.params;
  const { contactId, groupId } = req.body;

  try {
    // const updatedAssociation = await Model.update(id, contactId, groupId);
    console.log("Updating association with:", { id, contactId, groupId });
    const updatedAssociation = await Model.update(id, contactId, groupId);
    console.log("Update result:", updatedAssociation);
    if (!updatedAssociation) {
      return res.status(404).json({ message: "Association not found" });
    } else {
      res.json({
        message: "Contact-Group association updated successfully",
        data: updatedAssociation,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update association", error: error.message });
  }
};

const deleteContactGroup = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteResult = await Model.deleted(id);
    if (deleteResult.changes) {
      res.status(200).json({ message: "Association deleted successfully" });
    } else {
      res.status(404).json({ message: "Association not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the association",
      error: error.message,
    });
  }
};

module.exports = {
  createContactGroup,
  updateContactGroup,
  deleteContactGroup,
  readContactGroup,
};
