class View {
  static createContactView() {
    console.log("Data berhasil di tambahkan");
  }

  static updateContactView() {
    console.log("Data berhasil di Update");
  }

  static deleteContactView() {
    console.log("Data berhasil di Hapus");
  }

  static showContactView(data) {
    console.table(data);
  }

  static createGroupView() {
    console.log("Group berhasil dibuat");
  }

  static updateGroupView() {
    console.log("Group berhasil di update");
  }

  static deleteGroupView() {
    console.log("Group berhasil di hapus");
  }

  static showGroupsView(data) {
    console.table(data);
  }

  static createContactGroupsView() {
    console.log("Group Contact berhasil dibuat");
  }

  static updateContactGroupView() {
    console.log("Group Contact berhasil diupdate");
  }

  static deleteContactGroupView() {
    console.log("Group Contact berhasil dihapus");
  }

  static errorView(err) {
    console.log(err);
  }

  static helpView() {
    console.log(`
====================
ADDRESS BOOK COMMAND
====================

> node index.js createContact <name> <phoneNumber> <company> <email>
> node index.js updateContact <id> <name> <phoneNumber> <company> <email>
> node index.js deleteContact <id>
> node index.js showContact
> node index.js createGroups <groupName>
> node index.js updateGroups <id> <groupName>
> node index.js deleteGroups <id>
> node index.js showGroups
> node index.js createContactGroups <contactId> <groupId>
> node index.js updateContactGroups <id> <contactId> <groupId>
> node index.js deleteContactGroups <id> 
> node index.js help
    `);
  }
}

module.exports = View;