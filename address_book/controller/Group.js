const GroupsModel = require('../model/GroupModel')

class Group {
	static create(groupName) {
		GroupsModel.create(groupName)
	}

	static show() {
		GroupsModel.show()
	}

	static update(id, groupName) {
		GroupsModel.update(id, groupName)
	}

	static delete(id) {
		GroupsModel.delete(id)
		console.log(`Data dengan id: ${id} behasil dihapus`)
	}
}

module.exports = Group;