const ContactController = require("./controllers/ContactController.js");
const GroupsController = require("./controllers/GroupsController.js");
const ContactGroupsController = require("./controllers/ContactGroupsController.js");
const {createTables} = require("./connection.js");
let command = process.argv[2];
let subCommand = process.argv[3];
let argument = process.argv.slice(4);

/*
====================
ADDRESS BOOK COMMAND
====================

> node main.js create Contact <name> <phoneNumber> <company> <email> ✅
> node main.js update Contact <id> <name> <phoneNumber> <company> <email> ✅
> node main.js delete Contact <id> ✅
> node main.js get Contact <id> ✅
> node main.js showContact ✅
> node main.js allContact 
> node main.js create Groups <groupName> ✅
> node main.js update Groups <id> <groupName> ✅
> node main.js delete Groups <id> ✅
> node main.js showGroups <id> ✅
> node main.js allGroups
> node main.js create ContactGroups <contactId> <groupId> ✅
> node main.js update ContactGroups <id> <contactId> <groupId> ✅
> node main.js delete ContactGroups <id> ✅
> node main.js help

*/

async function main() {
  await createTables();

  if (!command) return
  
  switch (command) {
    case "create":
      if (subCommand === "Contact") {
        ContactController.create(
          argument[0],
          argument[1],
          argument[2],
          argument[3]
        );
      } else if (subCommand === "Groups") {
        GroupsController.create(argument[0]);
      } else if (subCommand === "ContactGroups") {
        ContactGroupsController.create(argument[0], argument[1]);
      } else {
        console.error("input yang dimasukkan salah!!!");
      }
      break;
    case "update":
      if (subCommand === "Contact") {
        ContactController.update(
          argument[0],
          argument[1],
          argument[2],
          argument[3],
          argument[4]
        );
      } else if (subCommand === "Groups") {
        GroupsController.update(argument[0], argument[1]);
      } else if (subCommand === "ContactGroups") {
        ContactGroupsController.update(argument[0], argument[1], argument[2]);
      } else {
        console.error("input yang dimasukkan salah!!!");
      }
      break;
    case "delete":
      if (subCommand === "Contact") {
        ContactController.delete(argument[0]);
      } else if (subCommand === "ContactGroups") {
        ContactGroupsController.delete(argument[0]);
      } else if (subCommand === "Groups") {
        GroupsController.delete(argument[0]);
      } else {
        console.error("input yang dimasukkan salah!!!");
      }
      break;
    case "get":
      if (subCommand === "Contact") {
        ContactController.get(argument[0])
      } else if (subCommand === "ContactGroups") {
        ContactGroupsController.get(argument[0]);
      } else if (subCommand === "Groups") {
        GroupsController.get(argument[0]);
      } else {
        console.error("input yang dimasukkan salah!!!");
      }
      break;
    case "showContact":
      ContactController.show();
      break;
    case "showGroups":
      GroupsController.show(process.argv[3]);
      break;
    case "allContacts":
      ContactController.allContacts();
      break;
    case "allGroups":
      GroupsController.allGroups();
      break;
    default:
      console.error("Coba lagi, input yang dimasukkan salah!!!");
  }
}

main();
