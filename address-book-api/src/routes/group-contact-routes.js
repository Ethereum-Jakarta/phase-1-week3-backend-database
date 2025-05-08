const express = require("express");
const {
    createGroupContact,
    updateGroupContact,
    deleteGroupContact
} = require("../controllers/group-contact-controller");
const { deleteGroupContactById } = require("../models/group-contact-model");

const groupContactRoute = express.Router();

groupContactRoute.post("/", createGroupContact);
groupContactRoute.put("/", updateGroupContact);
groupContactRoute.delete("/:id", deleteGroupContact);

module.exports = groupContactRoute;
