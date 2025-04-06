const ModelContact = require("../model/contact");

const getContacts = async (req, res) => {
  try {
    const result = await ModelContact.getContacts();
    res.status(200).send({
      status: 200,
      message: "Get Contacts Success",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const createContact = async (req, res) => {
  try {
    const body = req.body;
    const result = await ModelContact.createContact(
      body.name,
      body.phoneNumber,
      body.company,
      body.email
    );

    res.status(200).json({
      status: 200,
      message: "Succesc Create Contact",
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

const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const result = await ModelContact.updateContact(
      body.name,
      body.phoneNumber,
      body.company,
      body.email,
      id
    );

    res.status(200).json({
      status: 200,
      message: "Success Update Contact",
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

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ModelContact.deleteContact(id);

    res.status(200).json({
      status: 200,
      message: "Success delete Contact",
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

module.exports = { getContacts, createContact, updateContact, deleteContact };
