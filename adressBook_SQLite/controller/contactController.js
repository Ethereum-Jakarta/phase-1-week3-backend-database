let contact = require("../model/contact");
let View = require("../view")

class contactController{
    static createContact(name, phoneNumber, company, email){
        contact.create(name, phoneNumber, company, email)
        .then(View.viewCreateContact(name, phoneNumber, company, email))
        .catch((error) => View.viewError(error))
    }

    static updateContact(id, name, phoneNumber, company, email){
        contact.updates(id, name, phoneNumber, company, email)
        .then(View.viewUpdateContact(id, name, phoneNumber, company, email))
        .catch((error) => View.viewError(error))
    }

    static deleteContact(id){
        contact.delete(id)
        .then(View.viewDeleteContact(id))
        .catch((error) => View.viewError(error))
    }

    static showContact(){
        contact.show()
        .then(View.viewShowContact())
        .catch((error) => View.viewError(error))
    }

}

module.exports = contactController;