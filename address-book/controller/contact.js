const Contact = require("../model/contact");
const AddressBookView = require("../view");

class ContactController {
    static create(name, phoneNumber, company, email) {
        Contact.create(name, phoneNumber, company, email, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.addContactView();
        })
    }

    static update(id, name, phoneNumber, company, email) {
        Contact.update(id, name, phoneNumber, company, email, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.updateContactView();
        })
    }

    static delete(id) {
        Contact.delete(id, (err) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.deleteContactView();
        })
    }

    static show() {
        Contact.show((err, data) => {
            if (err) return AddressBookView.errorView(err);
            
            AddressBookView.showContactView(data);
        })
    }
}

module.exports = ContactController;