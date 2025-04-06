let Contact = require('../model/contact');
let View = require('../view/view')

class ControllerContact {
  static createContact(name, phoneNumber, company, email) {
    Contact.createContact(name, phoneNumber, company, email)
      .then(() => {
        View.createContactView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static updateContact(id, name, phoneNumber, company, email) {
    Contact.updateContact(id, name, phoneNumber, company, email)
      .then(() => {
        View.updateContactView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static deleteContact(id) {
    Contact.deleteContact(id)
      .then(() => {
        View.deleteContactView();
      })
      .catch((err) => {
        View.errorView(err);
      });
  }

  static showContact() {
    Contact.showContact()
    .then((data) => {
      View.showContactView(data)
    }).catch((err) => {
      View.errorView(err);
    }) 
  }

  static help() {
    View.helpView();
  }
}

module.exports = ControllerContact;