const express = require('express');
const { contact, createContact, updateContact, deleteContact } = require('../controllers/contact-controller');

const contactRouter = express.Router();

contactRouter.get("/", contact);
contactRouter.post("/", createContact);
contactRouter.put("/", updateContact);
contactRouter.delete("/:id", deleteContact);

module.exports = contactRouter;
