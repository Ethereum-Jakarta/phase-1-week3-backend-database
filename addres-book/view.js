const db = require('./connection');

class View {
  static createView(data) {
    console.log('Table Karyawan berhasil dibuat');
    console.table(data);
  }
  static updateView(data) {
    console.log('Table Karyawan telah diupdate');
    console.table(data);
  }
  static deleteView(data) {
    console.table(data);
    console.log('Table Karyawan ini berhasil dihapus');
  }
  static showView(data) {
    console.log(`Show Table Success`);
    console.table(data);
  }
  static errorView(error) {
    console.log(`${error}`);
  }
  static helpView() {
    console.log(`====================
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

module.exports = View;
