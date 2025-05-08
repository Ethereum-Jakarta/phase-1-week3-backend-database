const express = require("express");
const {
    groups,
    createGroups,
    updateGroups,
    deleteGroups,
} = require("../controllers/groups-controller");

const groupsRouter = express.Router();

groupsRouter.get("/", groups);
groupsRouter.post("/", createGroups);
groupsRouter.put("/", updateGroups);
groupsRouter.delete("/:id", deleteGroups);

module.exports = groupsRouter;
