let Group = require('./group');
let View = require(`./view`);
class controlerGroups{
    static async createGroup(name){
        Group.create(name).then((id)=>{
            View.berhasil(`Create Groups id ${id},${name}`)
            //console.log('berhasil')
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async updateGroup(id, name){
        //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
        Group.update(id, name).then((rows)=>{
            View.berhasil('Berhasil update data dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async deleteGroup(id){
        Group.delete(String(id)).then((res)=>{
            View.berhasil('berhasil menghapus groups dengan id ' + id)
        }).catch((err)=>{
            View.error(err);
        })
    }

    static async showGroup(command){
        Group.read().then((dataRwos)=>{
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

module.exports = controlerGroups;