const db = require('../connection/connection.js');

class Contact {
	static show() {
		return new Promise((resolve, reject) => {
			db.all(`SELECT * FROM Contact 
				JOIN GroupContact 
					ON Contact.id = GroupContact.contactId
				JOIN Groups
					ON GroupContact.groupId = Groups.id
				`, (err, data) => {
				if ( err ) {
					reject(err)
				} else {
					resolve(JSON.stringify(data))
				}
			})	
		})
	}

	static create(name, phoneNumber, company, email) {
		return new Promise((resolve, reject) => {
			db.run(`
				INSERT INTO Contact VALUES(null, ?, ?, ?, ?)
				`, [name, phoneNumber, company, email], err => {
					err ? reject(err) : resolve('Data berhasil ditambahkan')
				})	
		})
	}

	static update(id, name, phoneNumber, company, email) {
		return new Promise((resolve, reject) => {
			db.run(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
				[name, phoneNumber, company, email, id], err => {
					err ? reject(err) : resolve()
				})
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM Contact WHERE id = ?`, [id], err => {
				err ? reject(err) : resolve()
			})
		})
	}
}

module.exports = Contact;	