class View {
  // Contact
  static async createContactView(create) {
    console.log("create contact success!", create);
  }

  static async updateContactView(update) {
    console.log(`update contact success!`, update);
  }

  static async deleteContactView(id) {
    console.log(`delete contact success!`);
  }

  static async showContact(showContact) {
    console.log("data contacts");
    console.table(showContact);
  }

  // Contact Group
  static async createContactGroupsView(create) {
    console.log("create success!", create);
  }

  static async updateContactGroupsView(update) {
    console.log("update success!", update);
  }

  static async deleteContactGroupsView() {
    console.log("delete contactGroups success!");
  }

  // Group
  static async createGroupsView(create) {
    console.log("create groups success!", create);
  }

  static async updateGroupsView(update) {
    console.log("update success!", update);
  }

  static async deleteGroupsView() {
    console.log("delete success!");
  }

  static async showGroupsView(show) {
    console.log("data groups");
    console.table(show);
  }

  static errorView(err) {
    console.log(`Error : ${err}`);
  }
  static helpView() {
    console.log(`
      ====================
      ADDRESS BOOK COMMAND
      ====================
      
      > node main.js createContact <name> <phoneNumber> <company> <email>
      > node main.js updateContact <id> <name> <phoneNumber> <company> <email>
      > node main.js deleteContact <id>
      > node main.js showContact
      > node main.js createGroups <groupName>
      > node main.js updateGroups <id> <groupName>
      > node main.js deleteGroups <id>
      > node main.js showGroups
      > node main.js createContactGroups <contactId> <groupId>
      > node main.js updateContactGroups <id> <contactId> <groupId>
      > node main.js deleteContactGroups <id> 
      > node main.js help
      `);
  }
}

module.exports = View;
