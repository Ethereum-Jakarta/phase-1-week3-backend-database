const controler = require("./controler");
const controlerContact = require("./controlerContact");
const controlerGroups = require("./controlerGroups");
const controlerGroupContact = require("./controlerGroupContact");

let arg = process.argv.slice(2,process.argv.length)
switch (arg[0]) {
    case "create":
        switch(arg[1]){
            case "Contact":
                controlerContact.createContact(arg[2],arg[3],arg[4],arg[5]);
            break;
            case "Groups":
                controlerGroups.createGroup(arg[2]);
            break;
            case "ContactGroups":
                controlerGroupContact.createGroupContact(arg[2],arg[3]);
            break;
                
            default:
                controler.help();

            break;
        }
        
        
        break;

        case "update":
            switch(arg[1]){
                case "Contact":
                    controlerContact.updateContact(arg[2],arg[3],arg[4],arg[5],arg[6])
                break;

                case "Groups":
                    controlerGroups.updateGroup(arg[2],arg[3]);
                break;

                case "ContactGroups":
                    controlerGroupContact.updateGroupContact(arg[2],arg[3],arg[4]);
                break;
    
                default:
                    controler.help();
    
                break;
            }
            
            
            break;
            
        case "delete":
            switch(arg[1]){
                case "Contact":
                    controlerContact.deleteContact(arg[2]);
                break;
                case "Groups":
                    controlerGroups.deleteGroup(arg[2]);
                break;
                case "ContactGroups":
                    controlerGroupContact.deleteGroupContact(arg[2]);
                break;
    
                default:
                    controler.help();
    
                break;
            }
            
            
            break;
            

    case "help":
        controler.help();
        break;

    case "showContact":
        controlerContact.showContact(arg[0]);
        break;

    case "showGroups":
        controlerGroups.showGroup(arg[0]);
        break;

    default:
        controler.help();

        break;
}