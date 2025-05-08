const command = process.argv[2];
const model = process.argv[3];
const argument = process.argv.slice(4);
const ContactController = require("./controller/contactController.js");
const ContactGroupController = require("./controller/groupContactController.js");
const groupController = require("./controller/groupsController.js");

switch (command) {
  case "create": {
    switch (model) {
      case "contact":
        ContactController.createContact(
          argument[0],
          argument[1],
          argument[2],
          argument[3]
        );
        break;
      case "groups":
        groupController.createGroup(argument[0]);
        break;
      case "contactGroups":
        ContactGroupController.createContactGroup(argument[0], argument[1]);
        break;
    }
    break;
  }

  case "delete":
    switch (model) {
      case "contact":
        ContactController.deleteContact(argument[0]);
        break;

      case "groups":
        groupController.deleteGroups(argument[0]);
        break;

      case "contactGroups":
        ContactGroupController.deleteContactGroup(argument[0]);
        break;
    }
    break;
  case "showContact":
    ContactController.showContact();
    break;

  case "update": {
    switch (model) {
      case "contact":
        ContactController.updateContact(
          argument[0],
          argument[1],
          argument[2],
          argument[3],
          argument[4]
        );
        break;
      case "groups":
        groupController.updateGroups(argument[0], argument[1]);
        break;
      case "contactGroups":
        ContactGroupController.updateContactGroup(
          argument[0],
          argument[1],
          argument[2]
        );
        break;
    }
    break;
  }

  case "showgroups":
    groupController.showGroups();
    break;
  case "showcontactgroups":
    ContactGroupController.showContactGroup();
    break;

  default:
    ContactController.help();
    break;
}
