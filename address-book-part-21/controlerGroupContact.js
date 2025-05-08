let GroupContact = require('./groupContact');
let View = require(`./view`);
class controlerGroupContact{
    static async createGroupContact(contactId, groupId){
        GroupContact.create(contactId,groupId).then((id)=>{
            View.berhasil(`Create GroupContact id ${id},${contactId},${groupId}`)
            //console.log('berhasil')
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async updateGroupContact(id, contactId,groupId){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        GroupContact.update(id,contactId,groupId).then((rows)=>{
            View.berhasil('Berhasil update data dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async deleteGroupContact(id){
        GroupContact.delete(String(id)).then((res)=>{
            View.berhasil('berhasil menghapus groups dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async showGroup(command){
        GroupContact.read().then((dataRwos)=>{
            View.tabel(command,dataRwos)
        }).catch((err)=>{
            console.log("error bang " + err)
        })
    }


}

// controlerContact.showContact();
//controlerContact.deleteContact(2);
//controlerContact.createContact('a','p4','c','e4');
// controlerContact.updateContact('1','o','q','d','f');  
// controlerContact.createContact('hudza','0895366XXXXX','nolep.org','hudzaifahzzzzzz@gmail.com');  

module.exports = controlerGroupContact;