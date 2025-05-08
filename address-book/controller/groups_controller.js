let View = require("../view/view.js");
let Groups = require("../model/groups_model.js");

class GroupsController{
    static async createGroups(groupName){
        try {
            await Groups.create(groupName);
            View.createGroupsView();
        } catch (error) {
            console.log(error);
        }

    }

    static async updateGroups(id, groupName){
        try {
            await Groups.update(id, groupName);
            View.updateGroupsView();
        } catch (error) {
            console.log(error);
        }

    }

    static async deleteGroups(id){
        try {
            await Groups.delete(id);
            View.deleteGroupsView();
        } catch (error) {
            console.log(error);
        }

    }

    static async showGroups(){
        try{
            await Groups.show().then((rows)=>{
                View.showGroupsView(rows);
            })
            
        }catch (error){
            console.log(error);
        }
    }
}

module.exports = GroupsController;
