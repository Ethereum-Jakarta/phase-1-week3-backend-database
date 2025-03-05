const express = require("express");
const router = express.Router();
const contactController = require("../kontrol/kontakKontrol");
const groupController = require("../kontrol/grupKontrol");
const contactGroupController = require("../kontrol/kontakGrupKontrol");

// Routes for Contact
router
  .route("/kontak")
  .get(contactController.getContacts)
  .post(contactController.createContact);

router.put("/kontak/:id", contactController.updateContact);
router.delete("kontak/:id", contactController.deleteContact);

// Routes for Group
router
  .route("/grup")
  .get(groupController.getGroups)
  .post(groupController.createGroups);

router.put("/grup/:id", groupController.updateGroups);
router.delete("/grup/:id", groupController.deleteGroups);

// Routes for ContactGroup
router.post("/kontakGrup", contactGroupController.createContactGroup);
router.put("/kontakGrup/:id", contactGroupController.updateContactGroup);
router.delete("/kontakGrup/:id", contactGroupController.deleteContactGroup);

module.exports = router;