const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");
const groupController = require("../controller/groupController");
const contactGroupController = require("../controller/contactGroupController");

router
  .route("/contact")
  .get(contactController.readContact)
  .post(contactController.createContact);
router.put("/contact/:id", contactController.updateContact);
router.delete("/contact/:id", contactController.deleteContact);

router
  .route("/groups")
  .get(groupController.readGroups)
  .post(groupController.createGroups);
router.put("/groups/:id", groupController.updateGroups);
router.delete("/groups/:id", groupController.deleteGroups);

router.get("/contactGroup", contactGroupController.readContactGroup);  //melihat semua asosiasi group
router.post("/contactGroup", contactGroupController.createContactGroup); //tambah / add 1 contact di group
router.put("/contactGroup/:id", contactGroupController.updateContactGroup); //edit 1 contact di group
router.delete("/contactGroup/:id", contactGroupController.deleteContactGroup); //delete 1 contact di group

module.exports = router;
