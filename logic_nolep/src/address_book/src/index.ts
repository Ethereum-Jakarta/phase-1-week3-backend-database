import process from "node:process";
import { ContactController } from "./controllers/contact.controller";
import { GroupController } from "./controllers/group.controller";
import { ContactGroupController } from "./controllers/contact-group.controller";
import { ConsoleView } from "./view/index.view";
import { pool } from "./db/pool";

const command: string | undefined = process.argv[2];
const argument: string[] | undefined = process.argv.slice(3);

switch (command) {
  case "createContact":
    await ContactController.createContact(argument);
    break;
  case "updateContact":
    await ContactController.updateContact(argument);
    break;
  case "deleteContact":
    await ContactController.deleteContact(argument);
    break;
  case "showContacts":
    await ContactController.showContacts();
    break;
  case "createGroup":
    await GroupController.createGroup(argument);
    break;
  case "updateGroup":
    await GroupController.updateGroup(argument);
    break;
  case "deleteGroup":
    await GroupController.deleteGroup(argument);
    break;
  case "showGroups":
    await GroupController.showGroups();
    break;
  case "createContactGroup":
    await ContactGroupController.createContactGroup(argument);
    break;
  case "updateContactGroup":
    await ContactGroupController.updateContactGroup(argument);
    break;
  case "deleteContactGroup":
    await ContactGroupController.deleteContactGroup(argument);
    break;
  case "help":
    ConsoleView.showHelp();
    break;
  default:
    ConsoleView.showHelp();
    break;
}

await pool.end();
