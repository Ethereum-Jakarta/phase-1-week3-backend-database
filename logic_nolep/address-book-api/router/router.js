const express = require("express")
const ContactController = require("../controllers/ContactController")
const ContactGroupsController = require("../controllers/ContactGroupsController")
const GroupsController = require("../controllers/GroupsController")

const router = express.Router()

router
    .route("/contact")
    .get(ContactController.show)
    .post(ContactController.create)

router.get("/contact/:id", ContactController.get)
router.put("/contact/:id", ContactController.update)
router.delete("/contact/:id", ContactController.delete)

router
    .route("/contactGroup")
    .get(ContactGroupsController.show)
    .post(ContactGroupsController.create)

router.get("/contactGroup/:id", ContactGroupsController.get)
router.put("/contactGroup/:id", ContactGroupsController.update)
router.delete("/contactGroup/:id", ContactGroupsController.delete)

router
    .route("/groups")
    .get(GroupsController.show)
    .post(GroupsController.create)

router.get("/groups/:id", GroupsController.get)
router.put("/groups/:id", GroupsController.update)
router.delete("/groups/:id", GroupsController.delete)

module.exports = router