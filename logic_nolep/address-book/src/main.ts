import { ContactController } from "./controllers/ContactController.js";
import { GroupContactController } from "./controllers/GroupContactController.js";
import { GroupsController } from "./controllers/GroupsController.js";

const [,, command, table, ...args] = process.argv;

async function run() {
    switch (command) {
        case 'showContact':
            await ContactController.showAll();
            break;
        case 'showGroups':
            await GroupsController.showAll();
            break;
        case 'create':
            if (table === 'Contact') {
                await ContactController.addContact(args[0] || '', args[1] || '', args[2] || '', args[3] || '');
                break;
            } else if (table === 'Groups') {
                await GroupsController.addGroups(args[0] || '');
                break;
            } else if (table === 'ContactGroups') {
                await GroupContactController.addGroupContact(Number(args[0]), Number(args[1]));
                break;
            }
        case 'update':
            if (table === 'Contact') {
                await ContactController.updateContact(Number(args[0] || ''), args[1] || '', args[2] || '', args[3] || '', args[4] || '');
                break;
            } else if (table === 'Groups') {
                await GroupsController.updateGroups(Number(args[0] || ''), args[1] || '');
                break;
            } else if (table === 'ContactGroups') {
                await GroupContactController.updateGroupContact(Number(args[0]), Number(args[1]), Number(args[2]));
                break;
            }
        case 'delete':
            if (table === 'Contact') {
                await ContactController.deleteContact(Number(args[0]));
                break;
            } else if (table === 'Groups') {
                await GroupsController.deleteGroups(Number(args[0]));
                break;
            } else if (table === 'ContactGroups') {
                await GroupContactController.deleteGroupContact(Number(args[0]));
                break;
            }
        default:
            console.log('Command not found. Use "help" for info.');
            break;
    }
    process.exit();
}

run();