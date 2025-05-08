let GroupContact = require("./contactGroup");
let addressBookView = require("./view");

class GroupContactController {
    static delete(id){
        GroupContact.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.deleteGroupContactView(id);
            }
        })
    }
    static update(id,contact,group){
        GroupContact.update(id,contact,group,(err,data)=>{
            if (err) {
                console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.updateGroupContactView(contact,group);
            }
        })
    }
    static create(contact,group){
        GroupContact.create(contact,group,(err,data)=>{
            if (err) {
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.createGroupContactView(contact,group);
            }
        })
    }
    static show(){
        GroupContact.show((data,err)=>{
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


module.exports = GroupContactController;