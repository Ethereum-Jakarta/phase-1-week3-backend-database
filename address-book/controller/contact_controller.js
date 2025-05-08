let View = require("../view/view.js");
let Contact = require("../model/contact_model.js");

class ContactController{
    static test(){
        View.testView();
    }

    static help(){
        View.help();
    }

    static async createContact(name,phoneNumber,company,email){
        try {
            await Contact.create(name,phoneNumber,company,email);
            View.createContactView();
        } catch (error) {
            console.log(error);
        }

    }

    static async updateContact(id,name,phoneNumber,company,email){
        try {
            await Contact.update(id,name,phoneNumber,company,email)
            View.updateContactView();
        } catch (error) {
            console.log(error);
        } 
    }

    static async deleteContact(id){
        try {
            await Contact.delete(id)
            View.deleteContactView();
        } catch (error) {
            console.log(error);
        }
    }

    static async showContact(){
        try{
            await Contact.show().then((rows)=>{
                View.showContactView(rows);
            })
            
        }catch (error){
            console.log(error);
        }
    }
}


module.exports = ContactController;