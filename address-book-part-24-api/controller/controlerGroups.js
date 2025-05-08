let Group = require('../model/group');
let View = require(`../view/view`);
class controlerGroups{
    static async createGroup(name,req,res){
        Group.create(name).then((id)=>{
            View.berhasil([id,name],res)
            
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async updateGroup(id, name,req,res){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        Group.update(id, name).then((rows)=>{
            View.berhasil([id,name],res)
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async deleteGroup(id,req,res){
        Group.delete(String(id)).then((result)=>{
            View.berhasil([id,result],res)
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async showGroup(command,res){
        Group.read().then((dataRwos)=>{
            View.tabel(command,dataRwos,res)
        }).catch((err)=>{
            View.error(err,res);
        })
    }


}

// controlerContact.showContact();
//controlerContact.deleteContact(2);
//controlerContact.createContact('a','p4','c','e4');
// controlerContact.updateContact('1','o','q','d','f');  
// controlerContact.createContact('hudza','0895366XXXXX','nolep.org','hudzaifahzzzzzz@gmail.com');  

module.exports = controlerGroups;