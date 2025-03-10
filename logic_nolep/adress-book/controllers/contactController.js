const Contact = require("../models/contact");

const createContact = (name, phoneNumber, company, email) => {
    return Contact.create(name, phoneNumber, company, email);
};

const showContacts = () => {
    return Contact.show();
};

const updateContact = (id, name, phoneNumber, company, email) => {
    return Contact.update(id, name, phoneNumber, company, email);
};

const deleteContact = (id) => {
    return Contact.delete(id);
};

module.exports = { createContact, showContacts, updateContact, deleteContact };
