let command = process.argv[2];
let argument = process.argv.slice(3);
let ContactController = require("./controller/contact_controller.js");
const GroupsController = require("./controller/groups_controller.js");
const GroupContactController = require("./controller/groupcontact_controller.js");
/*
====================
ADDRESS BOOK COMMAND
====================

v node main.js create Contact <name> <phoneNumber> <company> <email>
v node main.js update Contact <id> <name> <phoneNumber> <company> <email>
v node main.js delete Contact <id>
> node main.js showContact
v node main.js create Groups <groupName>
v node main.js update Groups <id> <groupName>
> node main.js delete Groups <id>
> node main.js showGroups
v node main.js create ContactGroups <contactId> <groupId>
v node main.js update ContactGroups <id> <contactId> <groupId>
v node main.js delete ContactGroups <id> 
v node main.js help

*/

switch (command) {
    case "test":
        ContactController.test();
        break;
    case "help":
        ContactController.help();
        break;
    case "createContact":
        ContactController.createContact(argument[0], argument[1], argument[2], argument[3]);
        break;

    case "updateContact":
        ContactController.updateContact(argument[0], argument[1], argument[2], argument[3], argument[4]);
        break;
    case "deleteContact":
        ContactController.deleteContact(argument[0]);
        break;
    case "showContact":
        ContactController.showContact();
        break;
    case "createGroups":
        GroupsController.createGroups(argument[0]);
        break;
    case "updateGroups":
        GroupsController.updateGroups(argument[0], argument[1]);
        break;
    case "deleteGroups":
        GroupsController.deleteGroups(argument[0]);
        break; 
    case "showGroups":
        GroupsController.showGroups();
        break;
        
    case "createGroupContact":
        GroupContactController.createGroupContact(argument[0], argument[1]);
        break; 
    case "updateGroupContact":
        GroupContactController.updateGroupContact(argument[0], argument[1], argument[2]);
        break;
        
    case "deleteGroupContact":
        GroupContactController.deleteGroupContact(argument[0]);
        break;
    // buatlah semua command
    default:
        ContactController.help();
        break;
}
