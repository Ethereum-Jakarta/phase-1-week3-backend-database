const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const groupContactController = require('../controllers/groupContact');
const groupsController = require('../controllers/groups');

// Contact
router
  .route('/contact')
  .get(contactController.getAllContacts)
  .post(contactController.createContact);

//   Contact/id
router
  .route('/contact/:id')
  .get(contactController.getContact)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

//   Router Groups
router
  .route('/groups')
  .get(groupsController.getAllGroups)
  .post(groupsController.createGroups);

// Router Groups/id
router
  .route('/groups/:id')
  .get(groupsController.getGroups)
  .put(groupsController.updateGroups)
  .delete(groupsController.deleteGroups);

// Router ContactGroup
router
  .route('/groupContact')
  .get(groupContactController.getAllGroupContacts)
  .post(groupContactController.createGroupContact);

// Router ContactGroup/id
router
  .route('/groupContact/:id')
  .get(groupContactController.getGroupContact)
  .put(groupContactController.updateGroupContact)
  .delete(groupContactController.deleteGroupContact);

module.exports = router;
