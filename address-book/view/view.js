class View{
    static testView(){
        console.log("test aja");
    }

    static help(){
        console.log(`
        ====================
        ADDRESS BOOK COMMAND
        ====================

        v node main.js create Contact <name> <phoneNumber> <company> <email>
        v node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        v node main.js delete Contact <id>
        v node main.js showContact
        v node main.js create Groups <groupName>
        v node main.js update Groups <id> <groupName>
        v node main.js delete Groups <id>
        v node main.js showGroups
        v node main.js create ContactGroups <contactId> <groupId>
        v node main.js update ContactGroups <id> <contactId> <groupId>
        v node main.js delete ContactGroups <id> 
        v node main.js help
        
        `);
    }

    static createContactView(){
        console.log("success create contact");
    }

    static updateContactView(){
        console.log("success update contact");
    }

    static deleteContactView(){
        console.log("success delete contact");
    }

    static showContactView(contacts){
       console.table(contacts);
    }

    static createGroupsView(){
        console.log("success create group");
    }
    static updateGroupsView(){
        console.log("success update group");
    }
    static deleteGroupsView(){
        console.log("success delete group");
    }

    static showGroupsView(groups){
        console.table(groups);
     }


    static createGroupContactView(){
        console.log("success create groupcontact");
    }
    static updateGroupContactView(){
        console.log("success update groupcontact");
    }
    static deleteGroupContactView(){
        console.log("success delete groupcontact");
    }
}

module.exports = View;