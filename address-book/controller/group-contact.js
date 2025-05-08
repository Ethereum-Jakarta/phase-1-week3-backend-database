const GroupContact = require('../model/group-contact');
const AddressBookView = require("../view")

class GroupContactController {
    static create(contactId, groupId){
        GroupContact.create(contactId, groupId, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.addGroupContactView();
        })
    }

    static update(id, contactId, groupId){
        GroupContact.update(id, contactId, groupId, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.updateGroupContactView();
        })
    }

    static delete(id){
        GroupContact.delete(id, (err) => {
            if (err) return AddressBookView.errorView(err);

            AddressBookView.deleteGroupsView();
        })
    }
}

module.exports = GroupContactController;