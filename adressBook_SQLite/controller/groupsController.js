let Groups = require("../model/groups");
let View = require("../view");

class groupsController{

    static createGroups(groupName){
        Groups.create(groupName)
        .then(View.viewCreateGroups(groupName))
        .catch((error) => View.viewError(error))
    }

    static updateGroups(id, groupName){
        Groups.updates(id, groupName)
        .then(View.viewUpdateGroups(id, groupName))
        .catch((error) => View.viewError(error))
    }

    static deleteGroups(id){
        Groups.delete(id)
        .then(View.viewDeleteGroups(id))
        .catch((error) => View.viewError(error))
    }

    static showGroups(){
        Groups.show()
        .then(View.viewShowGroups())
        .catch((error) => View.viewError(error))
    }

}

module.exports = groupsController;