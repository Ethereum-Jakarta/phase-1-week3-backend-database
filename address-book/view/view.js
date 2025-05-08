class view {
  static help() {
    console.log(`
        ====================
        ADDRESS BOOK COMMAND
        ====================
        
        > node main.js create contact <name> <phoneNumber> <company> <email> | 'araara' '12345123' 'IT_jakarta' 'araara@mgmail.com'
        > node main.js update contact <id> <name> <phoneNumber> <company> <email> | '1' 'riska' 666999000 IT_Dev riskagdt@gmail.com
        > node main.js delete contact <id> | node main.js delete contact 2
        > node main.js showContact 
        > node main.js create groups <groupName> | node main.js create groups 'ipeka'
        > node main.js update groups <id> <groupName> | node main.js update groups '1' 'IPEKA
        > node main.js delete groups <id>  | node main.js delete groups 1 
        > node main.js showgroups | node main.js showgroups
        > node main.js create contactGroups <contactId> <groupId> | node main.js create contactGroups 1 1
        > node main.js update contactGroups <id> <contactId> <groupId> | node main.js update contactGroups 1 2
        > node main.js delete contactGroups <id> | node main.js delete contactGroups 1
        > node main.js showcontactGroups | node main.js showcontactgroups
        > node main.js help 
        
        `);
  }

  static errView(err) {
    console.log(err);
  }

  static createContactView(name, phoneNumber, company, email) {
    console.log(`
        Success!
        Name : ${name}
        Phone Number : ${phoneNumber}
        Company : ${company}
        Email : ${email}
        `);
  }

  static showContactView(data) {
    console.log(data);
  }

  static deleteContact(data) {
    console.log(`${data} telah dihapus`);
  }

  static updateContactView(data) {
    console.log(`Data berhasil di perbarui : ${data} `);
  }

  static createGroupView(data) {
    console.log(`Grup ${data} berhasil dibuat!`);
  }

  static showGroups(data) {
    console.log(data);
  }

  static deleteGroups(data) {
    console.log(`${data} berhasil dihapus!`);
  }

  static updateGroups(data) {
    console.log(`Grup berhasil di perbarui : ${data}`);
  }

  static createContactGroupView(data) {
    console.log("Data berhasil ditambahkan");
  }

  static updateContactGroupView(data) {
    console.log(`Data berhasil diperbarui : ${data}`);
  }

  static deleteContactGroupView(data) {
    console.log(`${data} berhasil dihapus!`);
  }

  static showContactGroup(data) {
    console.log(data);
  }
}

module.exports = view;
