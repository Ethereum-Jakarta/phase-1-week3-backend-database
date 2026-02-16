let command = process.argv[2];
let entity = process.argv[3];
let argument = process.argv.slice(4);
const contactController = require("./controller/contact.controller.js");
const groupController = require("./controller/groups.controller");
const contactGroup_Controller = require("./controller/contactGroup.controller.js");

if (entity === undefined) {
  switch (command) {
    case "help":
      console.log(`
        ====================
        ADDRESS BOOK COMMAND
        ====================
        
        > node main.js create Contact <name> <phoneNumber> <company> <email>
        > node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        > node main.js delete Contact <id>
        > node main.js showContact
        
        > node main.js create Groups <groupName>
        > node main.js update Groups <id> <groupName>
        > node main.js delete Groups <id>
        > node main.js showGroups
        
        > node main.js create ContactGroups <contactId> <groupId>
        > node main.js update ContactGroups <id> <contactId> <groupId>
        > node main.js delete ContactGroups <id>
        
        > node main.js help
        `);
      break;

    case "showContact":
      contactController.contactShow();
      break;

    case "showGroups":
      groupController.groupShow();
      break;
  }
} else {
  let fullCommand = `${command} ${entity}`.trim();

  switch (fullCommand) {
    case "create Contact":
      contactController.createContact(
        argument[0],
        argument[1],
        argument[2],
        argument[3]
      );
      break;

    case "update Contact":
      contactController.updateContact(
        argument[0],
        argument[1],
        argument[2].argument[3],
        argument[5]
      );
      break;

    case "delete Contact":
      contactController.deleteContact(argument[0]);
      break;

    case "create Groups":
      groupController.createGroup(argument[0]);
      break;

    case "update Groups":
      groupController.updateGroup(argument[0], argument[1]);
      break;

    case "delete Groups":
      groupController.deleteGroup(argument[0]);
      break;

    case "create ContactGroups":
      contactGroup_Controller.creatCG(argument[0], argument[1]);
      break;

    case "update ContactGroups":
      contactGroup_Controller.updateCG(argument[0], argument[1], argument[2]);
      break;

    case "delete ContactGroups":
      contactGroup_Controller.deleteCG(argument[0]);
      break;

    default:
      console.log("Command tidak dikenali");
      break;
  }
}



