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

const ContactController = require('./controller/Contact');
const GroupContactController = require('./controller/GroupContact')
const GroupsController = require('./controller/Group')
const view = require('./view/view');
let command = process.argv[2]
let argument = process.argv.slice(3);

switch (command) {
	case 'create':
		if (process.argv[3] == 'Contact') {
			ContactController.create(argument[1], argument[2], argument[3], argument[4]) 
		} else if ( process.argv[3] == 'ContactGroups' ) {
			GroupContactController.create(argument[1], argument[2])
		} else if ( process.argv[3] == 'Groups' ) {
			GroupsController.create(argument[1])
		}
		break;

	case 'delete':
		if ( process.argv[3] == 'Contact' ) {
			ContactController.delete(argument[1]);	
		} else if ( process.argv[3] == 'ContactGroups' ) {
			GroupContactController.delete(argument[1])
		} else if ( process.argv[3] == 'Groups' ) {
			GroupsController.delete(argument[1])
		}
		
		break;

	case 'update':
		if ( process.argv[3] == 'Contact' ) {
			ContactController.update(argument[1], argument[2], argument[3], argument[4], argument[5])	
		} else if ( process.argv[3] == 'ContactGroups' ) {
			GroupContactController.update(argument[1], argument[2], argument[3])
		} else if ( process.argv[3] == 'Groups' ) {
			GroupsController.update(argument[1], argument[2])
		}
		break;
		

	case "showContact":
		ContactController.show()
		break;

	case "showGroups":
		GroupsController.show()
		break;

	case 'help':
		view.help()
		break;

	default:
		view.help()
		break;
}