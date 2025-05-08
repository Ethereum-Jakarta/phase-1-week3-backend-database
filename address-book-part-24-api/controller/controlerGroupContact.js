let GroupContact = require('../model/groupContact');
let View = require(`../view/view`);
class controlerGroupContact{
    static async createGroupContact(contactId, groupId,req,res){
        GroupContact.create(contactId,groupId).then((id)=>{
            View.berhasil([id,contactId,groupId],res)
            //console.log('berhasil')
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async updateGroupContact(id, contactId,groupId,req,res){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        GroupContact.update(id,contactId,groupId).then((rows)=>{
            View.berhasil([id,rows],res)
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async deleteGroupContact(id,req,res){
        GroupContact.delete(String(id)).then((respon)=>{
            View.berhasil([id,respon],res)
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async showGroupContact(command,req,res){
        GroupContact.read().then((dataRwos)=>{
            console.log(res)
            View.berhasil([command,dataRwos],res)
        }).catch((err)=>{
            //console.log(err,res)
            View.error(err,res);
        })
    }


}

// controlerContact.showContact();
//controlerContact.deleteContact(2);
//controlerContact.createContact('a','p4','c','e4');
// controlerContact.updateContact('1','o','q','d','f');  
// controlerContact.createContact('hudza','0895366XXXXX','nolep.org','hudzaifahzzzzzz@gmail.com');  

module.exports = controlerGroupContact;