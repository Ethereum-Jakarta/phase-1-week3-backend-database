const db = require('../connection/connection.js');

class Groups {
	static show() {
		return new Promise((resolve, reject) => {
			db.all(`SELECT * FROM Groups
				JOIN GroupContact 
					ON Groups.id = GroupContact.groupId
				JOIN Contact
					ON GroupContact.contactId = Contact.id`, (err, data) => {
				err ? reject(err) : resolve(JSON.stringify(data))
			})
		})
	}

	static create(groupName) {
		return new Promise((resolve, reject) => {
			db.run(`INSERT INTO Groups VALUES(null, ?)`, [groupName], (err) => {
				err ? reject(err) : resolve()
			})
		})
	}

	static update(id, groupName) {
		return new Promise((resolve, reject) => {
			db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], (err) => err ? reject(err) : resolve() )
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM Groups WHERE id = ?`, [id], err => err ? reject(err) : resolve() )
			db.run(`DELETE FROM GroupContact WHERE groupId = ?`, [id], err => err ? reject(err) : resolve())
		})
	}
}

module.exports = Groups