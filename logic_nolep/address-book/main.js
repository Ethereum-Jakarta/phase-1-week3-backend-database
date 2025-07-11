let command = process.argv[2];
let table = process.argv[3];
let argument = process.argv.slice(4);

import ContactController from './contact_controller.js';
import GroupsController from './groups_controller.js';
import ContactGroupsController from './contactGroup_controller.js';

switch (command) {
    case 'create':
        if (table === 'Contact') {
            ContactController.create(argument[0], argument[1], argument[2], argument[3]);
        } else if (table === 'Groups') {
            GroupsController.create(argument[0]);
        } else if (table === 'ContactGroups') {
            ContactGroupsController.create(argument[0], argument[1]);
        }
        break;

    case 'update':
        if (table === 'Contact') {
            ContactController.update(argument[0], argument[1], argument[2], argument[3], argument[4]);
        } else if (table === 'Groups') {
            GroupsController.update(argument[0], argument[1]);
        } else if (table === 'ContactGroups') {
            ContactGroupsController.update(argument[0], argument[1], argument[2]);
        }
        break;

    case 'delete':
        if (table === 'Contact') {
            ContactController.delete(argument[0]);
        } else if (table === 'Groups') {
            GroupsController.delete(argument[0]);
        } else if (table === 'ContactGroups') {
            ContactGroupsController.delete(argument[0]);
        }
        break;

    case 'showContact':
        ContactController.showContact();
        break;

    case 'showGroups':
        GroupsController.showGroups();
        break;

    default:
        ContactController.help();
        break;
}