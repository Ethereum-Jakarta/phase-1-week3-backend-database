const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact_controller");
const groupController = require("../controller/groups_controller");
const groupContactController = require("../controller/groupcontact_controller");

router.get('/test', (req, res) => {
    res.send('API is connected to the database');
  });

router
  .route("/contact")
  .get(contactController.show)
  .post(contactController.create);

   router.put("/contact/:id", contactController.update);
   router.delete("/contact/:id", contactController.delete);

router
  .route("/groups")
  .get(groupController.show)
  .post(groupController.create);
router.put("/groups/:id", groupController.update);
router.delete("/groups/:id", groupController.delete);

router.post("/groupContact", groupContactController.create);
router.put("/groupContact/:id", groupContactController.update);
router.delete("/groupContact/:id", groupContactController.delete);

module.exports = router;