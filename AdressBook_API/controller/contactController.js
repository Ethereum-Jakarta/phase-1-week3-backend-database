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
    if(!body.name){res.status(400).json({status: 400, message: "Need to input name",error:err.message})}
    if(!body.phoneNumber){res.status(400).json({status: 400, message: "Need to input phoneNumber",error:err.message})}
    if(!body.email){res.status(400).json({status: 400, message: "Need to input email",error:err.message})}
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

    if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
    if(!body.name){res.status(400).json({status: 400, message: "Need to input name",error:err.message})}
    if(!body.phoneNumber){res.status(400).json({status: 400, message: "Need to input phoneNumber",error:err.message})}
    if(!body.email){res.status(400).json({status: 400, message: "Need to input email",error:err.message})}

    const result = await ModelContact.updateContact(
      id,
      body.name,
      body.phoneNumber,
      body.company,
      body.email
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
    if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
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