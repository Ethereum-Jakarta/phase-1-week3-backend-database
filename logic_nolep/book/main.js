let ContactController = require("./models/kontrol/kontakKontrol");
let GroupController = require("./models/kontrol/grupKontrol");
let ContactGroupController = require("./models/kontrol/kontakGrupkontrol");

let command = process.argv[2];
let args = process.argv.slice(3);

switch (command) {
    case "create":
        if (args[0] === "Contact") {
            ContactController.createContact(args[1], args[2], args[3], args[4]);
        } else if (args[0] === "Groups") {
            GroupController.createGroup(args[1]);
        } else if (args[0] === "ContactGroups") {
            ContactGroupController.createContactGroup(args[1], args[2]);
        }
        break;
    default:
        console.log("Perintah tidak ditemukan!");
}
