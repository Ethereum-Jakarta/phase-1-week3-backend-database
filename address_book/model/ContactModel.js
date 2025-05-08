let db = require("../connection");
let view = require('../view/view')

class ContactModel {
	constructor(name, phoneNumber, company, email) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.company = company;
		this.email = email;
	}

	static showdb() {
		db.all(`
			SELECT * FROM Contact 
			JOIN GroupContact 
				ON Contact.id = GroupContact.contactId 
			JOIN Groups 
				ON Groups.id = GroupContact.groupId
			`, (err, data) => {
			view.showContact(data)
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM Contact WHERE id = ?`, 
				[id], (err) => {
					if ( err ) {
						throw err
					} else {
						resolve(view.viewDeleteContact())
					}
				})
		})
	}

	static update(id, name, phoneNumber, company, email) {
		return new Promise((resolve,reject) => {
			db.run(`
				UPDATE Contact 
				SET name = ?, 
						phoneNumber = ?, 
						company = ?, 
						email = ? 
				WHERE id = ?
			`, 
				[name, parseInt(phoneNumber), company, email, id], err => {
					err ? reject(err) : resolve(view.viewUpdateContact())
				})	
		})
	}

	static create(name, phoneNumber, company, email) {
		let newContact = new ContactModel(name, phoneNumber, company, email);
		return new Promise((resolve, reject) => {
			db.run(`INSERT INTO Contact VALUES (null ,?, ?, ?, ?)`,
				[newContact.name, parseInt(newContact.phoneNumber), newContact.company, newContact.email],
				(err) => {
					if (err) {
						reject(err);
					} else {
						resolve(view.viewCreateContact());
					}
				})
		})
	}
}

module.exports = ContactModel;