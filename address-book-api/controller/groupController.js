const Model = require("../model/groupModel");

const createGroups = async (req, res) => {
  const { groupName } = req.body;

  try {
    const existingGroup = await Model.findByName(groupName);
    if (existingGroup) { // If `existingGroup` is not null, a group with the name exists
      return res.status(409).json({ message: "GroupName already in use" });
    }

    const newGroup = await Model.create(groupName);
    res.status(201).json({ message: "Group created successfully", data: newGroup });
  } catch (error) {
    res.status(500).json({ message: "Error creating group", error: error.message });
  }
};

const readGroups = async (req, res) => {
  try {
    const groups = await Model.read(); // Or a similar function in your model
    res
      .status(201)
      .json({ message: "Groups retrieved successfully", data: groups });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve groups", error: error.message });
  }
};

// Updates the details of an existing group
const updateGroups = async (req, res) => {
  const { id } = req.params;
  const { groupName } = req.body; // Assuming you're only updating the group's name

  if (!groupName) {
    return res.status(400).json({ message: "Group name is required" });
  }

  try {
    const updatedGroup = await Model.update(id, groupName);
    if (updatedGroup) {
      res
        .status(201)
        .json({ message: "Group updated successfully", data: updatedGroup });
    } else {
      res.status(404).json({ message: "Group not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update group", error: error.message });
  }
};

const deleteGroups = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Model.deleted(id);
    if (result.deleted) {
      res.status(200).json({ message: `Group with id ${id} is deleted` });
    } else {
      res.status(404).json({ message: "Group not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the group",
      error: error.message,
    });
  }
};


module.exports = { createGroups, readGroups, updateGroups, deleteGroups };
