let command = process.argv[2];
let argument = process.argv.slice(3);
let DataView = require('./view/view.js');
let ContactController = require('./controller/contactController.js');
let GroupsController = require('./controller/groupsController.js');
let GroupContactController = require('./controller/groupContactController.js');

switch (command) {
  case 'create':
    if (argument[0] === 'Contact') {
      argument = argument.slice(1);
      ContactController.create(
        argument[0],
        argument[1],
        argument[2],
        argument[3]
      );
    } else if (argument[0] === 'Groups') {
      argument = argument.slice(1);
      GroupsController.create(argument[0]);
    } else if (argument[0] === 'ContactGroups') {
      argument = argument.slice(1);
      GroupContactController.create(argument[0], argument[1]);
    } else {
      console.log('Command not recognized.');
    }
    break;

  case 'update':
    if (argument[0] === 'Contact') {
      argument = argument.slice(1);
      ContactController.update(
        argument[0],
        argument[1],
        argument[2],
        argument[3],
        argument[4]
      );
    } else if (argument[0] === 'Groups') {
      argument = argument.slice(1);
      GroupsController.update(argument[0], argument[1]);
    } else if (argument[0] === 'ContactGroups') {
      argument = argument.slice(1);
      GroupContactController.update(argument[0], argument[1], argument[2]);
    } else {
      console.log('Command not recognized.');
    }
    break;

  case 'delete':
    if (argument[0] === 'Contact') {
      argument = argument.slice(1);
      ContactController.delete(argument[0]);
    } else if (argument[0] === 'Groups') {
      argument = argument.slice(1);
      GroupsController.delete(argument[0]);
    } else if (argument[0] === 'ContactGroups') {
      argument = argument.slice(1);
      GroupContactController.delete(argument[0]);
    } else {
      console.log('Command not recognized.');
    }
    break;

  case 'showContact':
    ContactController.show();
    break;

  case 'showGroups':
    GroupsController.show();
    break;

  case 'help':
    DataView.helpView();
    break;

  default:
    console.log(
      "Command not recognized. Please use 'node main help' for more information."
    );
    break;
}
