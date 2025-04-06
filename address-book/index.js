let ControllerContact = require('./controller/controllerContact');
let ControllerGroups = require('./controller/controllerGroups');
let ControllerGroupContact = require('./controller/controllerGroupContact');
let command = process.argv[2];
let argument = process.argv.slice(3);

/*
====================
ADDRESS BOOK COMMAND
====================

> node index.js createContact <name> <phoneNumber> <company> <email>
> node index.js updateContact <id> <name> <phoneNumber> <company> <email>
> node index.js deleteContact <id>
> node index.js showContact
> node index.js createGroups <groupName>
> node index.js updateGroups <id> <groupName>
> node index.js deleteGroups <id>
> node index.js showGroups
> node index.js createContactGroups <contactId> <groupId>
> node index.js updateContactGroups <id> <contactId> <groupId>
> node index.js deleteContactGroups <id> 
> node index.js help

*/

switch(command) {
  case "createContact":
    ControllerContact.createContact(argument[0], argument[1], argument[2], argument[3]);
    break;
  case "updateContact":
    ControllerContact.updateContact(argument[0], argument[1], argument[2], argument[3], argument[4]);
    break;
  case 'deleteContact':
    ControllerContact.deleteContact(argument[0]);
    break;
  case 'showContact':
    ControllerContact.showContact();
    break;
  case 'createGroups':
    ControllerGroups.createGroup(argument[0]);
    break;
  case 'updateGroups':
    ControllerGroups.updateGroup(argument[0], argument[1]);
    break;
  case 'deleteGroups':
    ControllerGroups.deleteGroup(argument[0]);
    break;
  case 'showGroups':
    ControllerGroups.showGroups();
    break;
  case 'createContactGroups':
    ControllerGroupContact.createContactGroups(argument[0], argument[1]);
    break;
  case 'updateContactGroups':
    ControllerGroupContact.updateContactGroups(argument[0], argument[1], argument[2]);
    break;
  case 'deleteContactGroups':
    ControllerGroupContact.deleteContactGroups(argument[0]);
  default:
    ControllerContact.help();
}
