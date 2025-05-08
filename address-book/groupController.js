let Group = require("./group");
let addressBookView = require("./view");

class GroupController {
    static delete(id){
        Group.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.deleteGroupView(id);
            }
        })
    }
    static update(id,name){
        Group.update(id,name,(err,data)=>{
            if (err) {
                console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.updateGroupView(name);
            }
        })
    }
    static create(name){
        Group.create(name,(err,data)=>{
            if (err) {
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.createGroupView(name);
            }
        })
    }
    static show(){
        Group.show((data,err)=>{
            if (err) {
                addressBookView.ErrorView(err);
            } else {
                addressBookView.contactView(data);
            }
        })
    }
    static help (){

        addressBookView.helpView();

    }
    // lanjutkan command yang lain
}


module.exports = GroupController;