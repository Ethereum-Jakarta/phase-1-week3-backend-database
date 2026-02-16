const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');
const groupController = require('../controller/groupController');
const contactGroupController = require('../controller/contactGroupController');
router
    .route('/contact')
    .get(contactController.getContacts)
    .post(contactController.create);
router.put('/contact/:id', contactController.update);
router.delete('/contact/:id', contactController.delete);

router
    .route('/groups')
    .get(groupController.getGroups)
    .post(groupController.create);
router.put('/groups/:id', groupController.update);
router.delete('/groups/:id', groupController.delete);

router.post('/contactGroup', contactGroupController.create);
router.put('/contactGroup/:id', contactGroupController.update);
router.delete('/contactGroup/:id', contactGroupController.delete);

module.exports = router;