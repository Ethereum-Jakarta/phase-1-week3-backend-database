const db = require('../connection/connection')

class ContactGroup {
	static create(contactId, groupId) {
		return new Promise((resolve, reject) => {
			db.run(`INSERT INTO GroupContact VALUES(null, ?, ?)`, [contactId, groupId], (err, data) => err ? reject(err) : resolve(data))
		})
	}

	static update(id, contactId, groupId) {
		return new Promise((resolve, reject) => {
			db.run(`UPDATE GroupContact SET contactId = ?, groupId = ? WHERE id = ?`, [contactId, groupId, id],
				err => err ? reject(err) : resolve())
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], err => err ? reject(err) : resolve())
		})
	}
}

module.exports = ContactGroup