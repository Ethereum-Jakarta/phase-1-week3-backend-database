
const { nanoid } = require("nanoid");
let db = require("../connection/conDb");
db =db("./address_book.db")

class Group {
    constructor(id, name) {
        this.name = name;
        this.id = id;email;
    }

    static async create(name) {
        
        //let newContact = new Contact(name, phoneNumber, company, email);
        const id = nanoid(10);


        let group =  new Promise((resolve, reject) => {
            db.all(`INSERT INTO Groups(id,groupName) VALUES('${id}','${name}');`,(err,res)=>{
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
                let showGroupsQuery = `SELECT Groups.id AS "ID GRUP",groupName AS "Nama Grup", name AS "Nama Kontak", Contact.id AS "ID Kontak", GroupContact.id AS "ID Group Kontak" FROM (Groups FULL JOIN GroupContact ON Groups.id == GroupContact.groupId) FULL JOIN Contact ON Contact.id == GroupContact.contactId ORDER BY Groups.id`
                db.all(showGroupsQuery,(err,res)=>{
                    if(err){
                       return  reject(err)
                    }
                    return resolve(res);
                })
        })
    }

    static async delete(id){
        let deleteData = new Promise((resolve,rejects)=>{
            let query = `SELECT * FROM Groups WHERE id = '${id}'`
            db.all(query,(err,res)=>{
                if(err){
                    return rejects(err)
                }
                if(res.length == 0){
                    return rejects("data dengan id " + id + " tidak ditemukan")
                }

                let query = `DELETE FROM Groups WHERE id = '${id}'`;
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
    
    static async update(id,name){
   
        let data = new Promise((resolve,reject)=>{
            //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>

            let query = `SELECT * FROM Groups WHERE id = '${id}'`;
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

            db.all(`UPDATE Groups SET groupName = ? WHERE id = ?;`, [name,id],(err,res)=>{
               if(err){
                 return reject("update error "+err)
               }
               
                let query = `SELECT * FROM Groups WHERE id = '${id}'`;
                db.all(query,(err,res)=>{
                    if(err){
                        return reject(err);
                    }else{
                        res = res[0];
                        if((res.groupName != name)){
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


module.exports = Group;