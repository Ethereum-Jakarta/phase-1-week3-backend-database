class AddressBookView {
    static errorView(msg) {
        console.log(msg);
    }

    static addContactView() {
        console.log("Contact data added successfully");
    }

    static updateContactView() {
        console.log("Contact updated successfully");
    }

    static deleteContactView() {
        console.log("Contact deleted successfully")
    }

    static showContactView(data) {
        console.log(data);
    }

    static addGroupsView() {
        console.log("Groups added successfully")
    }

    static updateGroupsView() {
        console.log("Groups updated successfully")
    }

    static deleteGroupsView() {
        console.log("Groups deleted successfully")
    }

    static showGroupsView(data) {
        console.log(data);
    }

    static addGroupContactView() {
        console.log("GroupContact added successfully")
    }

    static updateGroupContactView() {
        console.log("GroupContact updated successfully")
    }

    static deleteGroupContactView() {
        console.log("GroupContact deleted successfully")
    }
}

module.exports = AddressBookView;