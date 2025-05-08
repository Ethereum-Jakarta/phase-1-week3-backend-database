// Controller
const ContactController = require('./controllers/contact');
const GroupContactController = require('./controllers/groupContact');
const GroupsController = require('./controllers/groups');
const View = require('./view');

const command = process.argv[2];
const table = process.argv[3];
const arg = process.argv.slice(4);

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
  case 'create': {
    switch (table) {
      case 'Contact':
        ContactController.create(arg[0], arg[1], arg[2], arg[3]);
        break;
      case 'Groups':
        GroupsController.create(arg[0]);
        break;
      case 'ContactGroups':
        GroupContactController.create(arg[0], arg[1]);
        break;
    }
    break;
  }
  case 'update': {
    switch (table) {
      case 'Contact':
        ContactController.update(arg[0], arg[1], arg[2], arg[3], arg[4]);
        break;
      case 'Groups':
        GroupsController.update(arg[0], arg[1]);
        break;
      case 'ContactGroups':
        GroupContactController.update(arg[0], arg[1], arg[2]);
        break;
    }
    break;
  }
  case 'delete': {
    switch (table) {
      case 'Contact':
        ContactController.delete(arg[0]);
        break;
      case 'Groups':
        GroupsController.delete(arg[0]);
        break;
      case 'ContactGroups':
        GroupContactController.delete(arg[0]);
        break;
    }
    break;
  }
  case 'showContact':
    ContactController.showContact();
    break;
  case 'showGroups':
    GroupsController.showGroups();
    break;
  default:
    View.helpView();
    break;
}
