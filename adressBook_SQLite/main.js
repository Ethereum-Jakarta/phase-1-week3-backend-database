let command = process.argv[2];
let argument = process.argv.slice(3);
let contactController = require("./controller/contactController");
let groupsController = require("./controller/groupsController");
let groupContactController = require("./controller/contactGroupsController");
let db = require("./connection");

/*
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

*/

switch (command) {
    case "createContact":
        contactController.createContact(argument[0], argument[1], argument[2], argument[3])
        break;
    
    // buatlah semua command
    case "updateContact":{
        contactController.updateContact(argument[0], argument[1], argument[2], argument[3], argument[4]);
        break;
    }
    case "deleteContact":{
        contactController.deleteContact(argument[0]);
        break;
    }
    case "showContact":{
        contactController.showContact()
        break;
    }
    case "createGroups":{
        groupsController.createGroups(argument[0]);
        break;
    }
    case "updateGroups":{
        groupsController.updateGroups(argument[0], argument[1]);
        break;
    }
    case "deleteGroups":{
        groupsController.deleteGroups(argument[0])
        break;
    }
    case "showGroups":{
        groupsController.showGroups()
        break;
    }
    case "createContactGroups" : {
        groupContactController.create(argument[0], argument[1]);
        break;
    }
    case "updateContactGroups" : {
        groupContactController.updateContactGroups(argument[0], argument[1], argument[2]);
        break;
    }
    case "deleteContactGroups" : {
        groupContactController.deleteContactGroups(argument[0]);
        break;
    }
    default:
        console.log("\n====================");
        console.log("ADDRESS BOOK COMMAND");
        console.log("====================");
        console.log("\n> node main.js createContact <name> <phoneNumber> <company> <email>")
        console.log("> node main.js updateContact <id> <name> <phoneNumber> <company> <email>")
        console.log("> node main.js deleteContact <id>")
        console.log("> node main.js showContact")
        console.log("> node main.js createGroups <groupName>")
        console.log("> node main.js updateGroups <id> <groupName>")
        console.log("> node main.js deleteGroups <id>")
        console.log("> node main.js showGroups")
        console.log("> node main.js createContactGroups <contactId> <groupId>")
        console.log("> node main.js updateContactGroups <id> <contactId> <groupId>")
        console.log("> node main.js deleteContactGroups <id> ")
        console.log("> node main.js help\n")
        break;
}

db.close()