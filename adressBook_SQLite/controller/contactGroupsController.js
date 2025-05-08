let groupContact = require("../model/groupsContact");
let View = require("../view");

class groupContactController{
    static create(contactId, groupId){
        groupContact.create(contactId, groupId)
        .then(View.viewCreateContactGroups(contactId, groupId))
        .catch((error) => View.viewError(error))
    }

    static updateContactGroups(id, contactId, groupId){
        groupContact.updates(id, contactId, groupId)
        .then(View.viewUpdateContactGroups(id, contactId, groupId))
        .catch((error) => View.viewError(error))
    }

    static deleteContactGroups(id){
        groupContact.delete(id)
        .then(View.viewDeleteContactGroups(id))
        .catch((error) => View.viewError(error))
    }

}

module.exports = groupContactController;