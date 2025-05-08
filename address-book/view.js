class addressBookView {
    static deleteGroupView(id){
        console.log("---------------------------------------------------")
        console.log("Group ID "+id+" berhasil dihapus")
        console.log("gunakan command berikut untuk melihat Group yang ada")
        console.log("> node main.js showGroups")
        console.log("---------------------------------------------------")
    }
    static deleteGroupContactView(id){
        console.log("---------------------------------------------------")
        console.log("ContactGroup ID "+id+" berhasil dihapus")
        console.log("---------------------------------------------------")
    }
    static updateGroupContactView(contact,group){
        console.log("---------------------------------------------------")
        console.log("contact ID "+contact+" berhasil berpindah ke group ID "+group)
        console.log("---------------------------------------------------")
    }
    static createGroupContactView(contact,group){
        console.log("---------------------------------------------------")
        console.log("contact ID "+contact+" berhasil masuk ke group ID "+group)
        console.log("---------------------------------------------------")
    }
    static createGroupView(name){
        console.log("---------------------------------------------------")
        console.log("Group "+name+" berhasil ditambahkan")
        console.log("gunakan command berikut untuk melihat Groups yang ada")
        console.log("> node main.js showGroups")
        console.log("---------------------------------------------------")
    }
    static updateGroupView(name){
        console.log("---------------------------------------------------")
        console.log("Group "+name+" berhasil diubah")
        console.log("gunakan command berikut untuk melihat Groups yang ada")
        console.log("> node main.js showGroupst")
        console.log("---------------------------------------------------")
    }
    static contactView(data) {
        console.table(data)
    }
    static deleteView(id){
        console.log("---------------------------------------------------")
        console.log("contact ID "+id+" berhasil dihapus")
        console.log("gunakan command berikut untuk melihat contact yang ada")
        console.log("> node main.js showContact")
        console.log("---------------------------------------------------")
    }
    static createView(name,data){
        console.log("---------------------------------------------------")
        console.log("contact "+name+" berhasil ditambahkan")
        console.log("gunakan command berikut untuk melihat contact yang ada")
        console.log("> node main.js showContact")
        console.log("---------------------------------------------------")
    }
    static updateView(name){
        console.log("---------------------------------------------------")
        console.log("contact "+name+" berhasil diubah")
        console.log("gunakan command berikut untuk melihat contact yang ada")
        console.log("> node main.js showContact")
        console.log("---------------------------------------------------")
    }
    static contactView(data) {
        console.table(data)
    }
    static ErrorView(err) {
        console.log(err)
    }
    static helpView(){
        console.log("---------------------------------------------------")
        console.log("Address Book Command")
        console.log("> node main.js create <name> <phoneNumber> <company> <email>")
        console.log("> node main.js update <id> <name> <phoneNumber> <company> <email>")
        console.log("> node main.js delete <id>")
        console.log("> node main.js showContact")
        console.log("> node main.js createGroups <groupName>")
        console.log("> node main.js updateGroups <id> <groupName>")
        console.log("> node main.js deleteGroups <id>")
        console.log("> node main.js showGroups")
        console.log("> node main.js createContactGroups <contactId> <groupId>")
        console.log("> node main.js updateContactGroups <id> <contactId> <groupId>")
        console.log("> node main.js deleteContactGroups <id> ")
        console.log("> node main.js help")
        console.log("---------------------------------------------------")
    }
    // lanjutkan method lain
}


module.exports = addressBookView;