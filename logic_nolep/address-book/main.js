let command = process.argv[2];
let argument = process.argv.slice(3);
const ContactController = require("./src/controllers/contactController");
const ContactGroupsController = require("./src/controllers/contactGroupsController");
const GroupsController = require("./src/controllers/groupsController");

/*
====================
ADDRESS BOOK COMMAND
====================
> node main.js createContact <name> <phoneNumber> <company> <email>
> node main.js updateContact <id> <name> <phoneNumber> <company> <email>
> node main.js deleteContact <id>
> node main.js showContact
> node main.js createGroups <groupName>
> node main.js updateGroups <id> <groupName>
> node main.js deleteGroups <id>
> node main.js showGroups
> node main.js createContactGroups <contactId> <groupId>
> node main.js updateContactGroups <id> <contactId> <groupId>
> node main.js deleteContactGroups <id> 
> node main.js help
Relation Effect
showContact ->  wajib join 2 table lainnya untuk mendapatkan semua data
showGroups -> wajib join 2 table lainnya agar bisa dapat data list contact dari setiap group
deleteGroup -> delete data group berarti harus delete data contactGroup yang menggunakan data id group yang di delete tersebut.
*/

switch (command) {
  case "createContact":
    ContactController.createContact(
      argument[0],
      argument[1],
      argument[2],
      argument[3]
    );
    break;
  case "updateContact":
    ContactController.updateContact(
      argument[0],
      argument[1],
      argument[2],
      argument[3],
      argument[4]
    );
    break;
  case "deleteContact":
    ContactController.deleteContact(argument[0]);
    break;
  case "showContact":
    ContactController.showContact(argument);
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
  case "createContactGroups":
    ContactGroupsController.createContactGroups(argument[0], argument[1]);
    break;
  case "updateContactGroups":
    ContactGroupsController.updateContactGroups(
      argument[0],
      argument[1],
      argument[2]
    );
    break;
  case "deleteContactGroups":
    ContactGroupsController.deleteContactGroups(argument[0]);
    break;
  default:
    ContactGroupsController.help();
    break;
}