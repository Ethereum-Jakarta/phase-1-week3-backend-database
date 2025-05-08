const contactModel = require('../model/ContactModel');

class ContactController {
	static create(name, phoneNumber, company, email) {
		contactModel.create(name, phoneNumber, company, email)
	}

	static update(id, name, phoneNumber, company, email) {
		contactModel.update(id, name, phoneNumber, company, email)
	}

	static delete(id) {
		contactModel.delete(id)
	}

	static show() {
		contactModel.showdb()
	}
}

module.exports = ContactController;