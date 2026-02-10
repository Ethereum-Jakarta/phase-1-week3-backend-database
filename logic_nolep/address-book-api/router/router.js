const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const groupController = require("../controllers/groupController");
const contactGroupController = require("../controllers/contactGroupController");

router
  .route("/contact")
  .get(contactController.getContacts)
  .post(contactController.createContact);
router.put("/contact/:id", contactController.updateContact);
router.delete("/contact/:id", contactController.deleteContact);

router
  .route("/group")
  .get(groupController.getGroups)
  .post(groupController.createGroup);
router.put("/group/:id", groupController.updateGroup);
router.delete("/group/:id", groupController.deleteGroup);

router.post("/contact-group", contactGroupController.createContactGroup);
router.put("/contact-group/:id", contactGroupController.updateContactGroup);
router.delete("/contact-group/:id", contactGroupController.deleteContactGroup);

module.exports = router;
