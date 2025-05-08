const groupContactModel = require('../model/GroupContactModel')

class GroupContact {
	static create(contactId, groupId) {
		groupContactModel.create(contactId, groupId);
	}
	
	static update(id, contactId, groupId) {
		groupContactModel.update(id, contactId, groupId);
	}

	static delete( id ) {
		groupContactModel.delete(id)
	}
}

module.exports = GroupContact;