const Model = require("../model/contactModel");

const createContact = async (req, res) => {
  try {
    const { name, phoneNumber, company, email } = req.body;

    const missingFields = ["name", "phoneNumber", "company", "email"].filter(
      (field) => !req.body[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `${missingFields.join(", ")} required`,
      });
    }

    await Model.create(name, phoneNumber, company, email);
    res.status(201).json({ message: "Contact created successfully" });
  } catch (error) {
    console.error("Error creating contact:", error);
    const statusCode = error.code === "SQLITE_CONSTRAINT" ? 400 : 500;
    const message =
      error.code === "SQLITE_CONSTRAINT"
        ? error.message.includes("phoneNumber")
          ? "Phone number already exists"
          : "Email already exists"
        : "An internal error occurred on the server. Please try again later";

    res.status(statusCode).json({ message, error: error.message });
  }
};

const readContact = async (req, res) => {
  try {
    const result = await Model.read();
    res.status(200).json({
      message: "Successfully retrieved data",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "An internal error occurred on the server. Please try again later",
      error: error.message,
    });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, company, email } = req.body;

  if (!name || !phoneNumber || !company || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const updatedContact = await Model.update(
      id,
      name,
      phoneNumber,
      company,
      email
    );
    if (updatedContact) {
      res.json({
        message: "Contact updated successfully",
        data: updatedContact,
      });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the contact",
      error: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Model.deleted(id);
    if (result.changes) {
      res.json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the contact",
      error: error.message,
    });
  }
};

module.exports = { createContact, readContact, updateContact, deleteContact };
