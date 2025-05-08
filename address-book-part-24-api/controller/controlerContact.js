let Contact = require('../model/contact');
let View = require(`../view/view`);
class controlerContact{
    static async createContact(name, phoneNumber, company, email,req,res){
        Contact.create(name, phoneNumber, company, email).then((id)=>{
            View.berhasil([{"id" : id,"nama" : name,"phoneNumber":phoneNumber,"company":company,"email":email}],res);
            //console.log('request create contact berhasil.')
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async updateContact(id, name, phoneNumber, company, email,req,res){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        Contact.update(id, name, phoneNumber, company,email,req,res).then((rows)=>{
            View.berhasil([
                {
                    "id" : rows.id,
                    "nama" : rows.nama,
                    "phoneNumber" : rows.phoneNumber,
                    "company" : rows.company,
                    "email" : rows.email,
                }
            ],res);
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async deleteContact(id,req,res){
        Contact.delete(String(id)).then((result)=>{
            View.berhasil(id,res);
        }).catch((err)=>{
            View.error(err,res);
        })
    }

    static async showContact(command,req,res){
        Contact.read().then((dataRwos)=>{
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

module.exports = controlerContact;