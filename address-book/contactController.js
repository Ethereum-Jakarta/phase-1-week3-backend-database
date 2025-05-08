let Contact = require("./contact");
let addressBookView = require("./view");

class ContactController {
    static delete(id){
        Contact.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.deleteView(id);
            }
        })
    }
    static update(id,name, phoneNumber, company, email){
        Contact.update(id,name, phoneNumber, company, email,(err,data)=>{
            if (err) {
                console.log(err)
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.updateView(name);
            }
        })
    }
    static create(name, phoneNumber, company, email){
        Contact.create(name, phoneNumber, company, email,(err,data)=>{
            if (err) {
                addressBookView.ErrorView(err);
            } else {
                // console.log(data)
                addressBookView.createView(name,data);
            }
        })
    }
    static showContact(){
        Contact.showContact((data,err)=>{
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


module.exports = ContactController;