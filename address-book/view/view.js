class DataView {
  static create(data) {
    console.log('A row with this table:');
    console.table(data);
    console.log('has been inserted successfully.');
  }

  static update(currentData, updatedData) {
    console.log('A row with this table:');
    console.table(currentData);
    console.log('successfully updated to this table:');
    console.table(updatedData);
  }

  static delete(data) {
    console.log('This table:');
    console.table(data);
    console.log('has been deleted successfully.');
  }

  static show(data) {
    console.table(data);
  }

  static errorView(err) {
    console.error(err.message);
  }

  static helpView() {
    console.log(`
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
  `);
  }
}

module.exports = DataView;
