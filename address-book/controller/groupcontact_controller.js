let View = require("../view/view.js");
let GroupContact = require("../model/groupcontact_model.js");

class GroupContactController{
    static async createGroupContact(contactId, groupsId){
        try {
            await GroupContact.create(contactId,groupsId);
            View.createGroupContactView();
        } catch (error) {
            console.log(error);
        }

    }

    static async updateGroupContact(id, contactId, groupsId){
        try {
            await GroupContact.update(id, contactId,groupsId);
            View.updateGroupContactView();
        } catch (error) {
            console.log(error);
        }

    }
    static async deleteGroupContact(id){
        try {
            await GroupContact.delete(id);
            View.deleteGroupContactView();
        } catch (error) {
            console.log(error);
        }

    }

}


module.exports = GroupContactController;
