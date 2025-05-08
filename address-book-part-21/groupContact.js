
const { nanoid } = require("nanoid");
let db = require("./conDb");
db =db("./address_book.db")

class GroupContact {
    constructor(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static async create(contactId,groupId) {
        
        //let newContact = new Contact(name, phoneNumber, company, email);
        const id = nanoid(10);


        let group =  new Promise((resolve, reject) => {
            db.all(`INSERT INTO GroupContact(id,contactId,groupId) VALUES('${id}','${contactId}','${groupId}');`,(err,res)=>{
                if(err){
                    //console.log(err)
                    return reject(err);
                }
                resolve(id);
            })
        })

        return group;

        
    }

    static read(){
        return new Promise((resolve,reject)=>{
                db.all('SELECT * FROM GroupsContact',(err,res)=>{
                    if(err){
                       return  reject(err)
                    }
                    return resolve(res);
                })
        })
    }

    static async delete(id){

        let deleteData = new Promise((resolve,rejects)=>{
            let query = `SELECT * FROM GroupContact WHERE id = '${id}'`
            db.all(query,(err,res)=>{
                if(err){
                    return rejects(err)
                }
                if(res.length == 0){
                    return rejects("data dengan id " + id + " tidak ditemukan")
                }

                let query = `DELETE FROM GroupContact WHERE id = '${id}'`;
                db.all(query,(err,res)=>{
                    if(err){
                        return rejects(err);
                    }
                    resolve(res);
                })
            })
        })

        return deleteData

    }
    
    static async update(id,contactId,groupId){
   
        let data = new Promise((resolve,reject)=>{
            //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
            
            let query = `SELECT * FROM GroupContact WHERE id = '${id}'`;
            db.all(query,(err,res)=>{
                if(err){
                    reject(err);
                }else{
                    if(res.length == 0) reject("id tidak di temukan")
                     resolve(res);
                }
            })
        })

        let dataLama = await data.then((rows)=>{return rows[0]})
        
        if(!dataLama){
            return dataLama
        }
        

        let update = new Promise((resolve,reject)=>{

            db.all(`UPDATE GroupContact SET contactId = ?,groupId = ? WHERE id = ?;`, [contactId,groupId,id],(err,res)=>{
               if(err){
                 return reject("update error "+err)
               }
               
                let query = `SELECT * FROM GroupContact WHERE id = '${id}'`;
                db.all(query,(err,res)=>{
                    if(err){
                        return reject(err);
                    }else{
                        res = res[0];
                        if((res.contactId != contactId || res.groupId != groupId)){
                            return reject("update gagal")
                        }
                        resolve(res);
                    }
                })

            });
            

        })

        
        //return dataBaru
        return update;

    }
    
}


module.exports = GroupContact;