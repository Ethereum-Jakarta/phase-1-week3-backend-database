const db = require('../connection')
const view = require('../view/view')

class GroupModel {
	constructor(groupName) {
		this.groupName = groupName;
	}

	static show()	 {
		return new Promise((resolve, reject) => {
			db.all(`
				SELECT * FROM Groups 
				JOIN GroupContact 
					ON Groups.id = GroupContact.groupId
				JOIN Contact
					ON GroupContact.contactId = Contact.id`, (err, data) => {
						err ? reject(err) : resolve(view.showGroups(data))
					})
		})
	}

	static create(groupName) {
		let data = new GroupModel(groupName);
		return new Promise((reject, resolve) => {
			db.run(`INSERT INTO Groups VALUES(null, ?)`, [data.groupName], err => {
				err ? reject(err) : resolve()
			})
		}).catch(err => {
			err == undefined ? console.log(view.viewCreateGroups()) : console.log(err)
		})
	}

	static delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM GroupContact WHERE groupId = ?;`, [id], err => {
				err ? reject(err) : resolve('Data berhasil di hapus dengan id: ' + id)
			});
			db.run(`DELETE FROM Groups WHERE id = ?`, [id], err => {
				err ? reject(err) : resolve('Data berhasil dihapus dengan id: ' + id)
			})
		})
	}

	static update(id, groupName) {
		return new Promise((reject, resolve) => {
			db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], err => {
				err ? reject(err) : resolve
			})
		}).catch(err => {
			err == undefined ? console.log(view.viewUpdateGroups()) : console.log(err)
		})
	}
}

module.exports = GroupModel;