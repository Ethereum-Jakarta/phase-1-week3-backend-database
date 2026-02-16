class BookView {

    // table Contact
    static createContact(value) {
        console.log('Create contact success!!');
        console.table(value);
    }

    static updateContact(value) {
        console.log('Update contact success!!');

        console.log('Before update:');
        console.table(value[0]);

        console.log('After update:');
        console.table(value[1]);
    }

    static deleteContact(value) {
        console.log('Delete contact success!!');
        console.table(value);
    }

    static showContact(value) {
        console.log(`Here's the contact list:`);
        console.table(value);
    }

    // table groups

    static createGroups(value) {
        console.log('Create groups success!!');
        console.table(value);
    }

    static updateGroups(value) {
        console.log('Update groups success!!');

        console.log('Before update:');
        console.table(value[0]);

        console.log('After update:');
        console.table(value[1]);
    }

    static deleteGroups(value) {
        console.log('Delete groups success!!');
        console.table(value);
    }

    static showGroups(value) {
        console.log(`Here's the group list:`);
        console.table(value);
    }

    // table contactGroups
    static createContactGroups(value) {
        console.log('Create Contact Groups success!!');
        console.table(value);
    }

    static updateContactGroups(value) {
        console.log('Update Contact Groups success!!');

        console.log('Before update:');
        console.table(value[0]);

        console.log('After update:');
        console.table(value[1]);
    }

    static deleteContactGroups(value) {
        console.log('Delete Contact Groups success!!');
        console.table(value);
    }

    static errorView(error) {
        console.error('Error here:', error);
    }

    static helpView() {
        console.log(`/*
====================
ADDRESS BOOK COMMAND
====================

> node main.js create Contact <name> <phoneNumber> <company> <email>
> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
> node main.js delete Contact <id>
> node main.js showContact
> node main.js create Groups <groupName>
> node main.js update Groups <id> <groupName>
> node main.js delete Groups <id>
> node main.js showGroups
> node main.js create ContactGroups <contactId> <groupId>
> node main.js update ContactGroups <id> <contactId> <groupId>
> node main.js delete ContactGroups <id> 
> node main.js help

*/`)
    }
}

export default BookView;