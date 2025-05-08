const db = require('../connection');
const view = require('../view/view')

class GroupContactModel {
	constructor (contactId, groupId) {
		this.contactId = contactId;
		this.groupId = groupId;
	}

	static create ( contactId, groupId ) {
		let newGroup = new GroupContactModel(contactId, groupId)

		return new Promise((reject, resolve) => {
			db.run(`
				INSERT INTO GroupContact VALUES (null, ?, ?)
				`, [newGroup.contactId, newGroup.groupId], err => {
					if (err) {
						console.log(err)
					} else {
						view.viewCreateGroupContact()
					}
				})
		})
	}

	static update ( id, contactId, groupId ) {
		return new Promise((reject, resolve) => {
			db.run(`UPDATE GroupContact SET contactId = ?, groupId = ? 
				WHERE id = ?`, [contactId, groupId, id], err => {
					err ? reject(err) : resolve('Data berhasil diubah')
				})
		}).catch(err => {
			err == undefined ? console.log('') : console.log(err)
		})
	}

	static delete ( id ) {
		return new Promise((reject, resolve) => {
			db.run(`DELETE FROM GroupContact WHERE id = ?`, id, (err) => {
				err ? reject(err) : resolve(view.viewDeleteGroupContact());
			})
		}).catch(err => {
			err == undefined ? console.log('') : console.log(err)
		})
	}
}

module.exports = GroupContactModel;