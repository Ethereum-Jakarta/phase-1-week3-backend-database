const Groups = require("../model/groups");
const AddressBookView = require("../view");

class GroupsController {
    static create(name) {
        Groups.create(name, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.addGroupsView();
        });
    }

    static update(id, name) {
        Groups.update(id, name, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.updateGroupsView();
        });
    }

    static delete(id) {
        Groups.delete(id, (err) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.deleteGroupsView();
        });
    }

    static show() {
        Groups.show((err, data) => {
            if (err) AddressBookView.errorView(err);

            AddressBookView.showGroupsView(data);
        });
    }
}

module.exports = GroupsController;
