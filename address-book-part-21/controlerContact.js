let Contact = require('./contact');
let View = require(`./view`);
class controlerContact{
    static async createContact(name, phoneNumber, company, email){
        Contact.create(name, phoneNumber, company, email).then((id)=>{
            View.berhasil(`Create user id ${id},${name},${phoneNumber},${company},${email}`)
            //console.log('berhasil')
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async updateContact(id, name, phoneNumber, company, email){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        Contact.update(id, name, phoneNumber, company, email).then((rows)=>{
            View.berhasil('Berhasil update data dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async deleteContact(id){
        Contact.delete(String(id)).then((res)=>{
            View.berhasil('berhasil menghapus kontak dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async showContact(command){
        Contact.read().then((dataRwos)=>{
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

module.exports = controlerContact;