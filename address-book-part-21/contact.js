
const { nanoid } = require("nanoid");
let db = require("./conDb");
db =db("./address_book.db")

class Contact {
    constructor(name, phoneNumber, company, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.company = company;
        this.email = email;
    }

    static async create(name, phoneNumber, company, email) {
        
        //let newContact = new Contact(name, phoneNumber, company, email);
        const id = nanoid(10);

        let newUser =  new Promise((resolve, reject) => {
            db.all(`INSERT INTO Contact(id,name,phoneNumber,company,email) VALUES('${id}','${name}','${phoneNumber}','${company}','${email}')`,(err,res)=>{
                if(err){
                    //console.log(err)
                    return reject(err);
                }
                resolve(id);
            })
        })

        return newUser

        
    }

    static read(){
        return new Promise((resolve,reject)=>{
                db.all('SELECT Contact.id AS "ID Kontak",name AS "NAMA Kontak", company AS "COMPANY", email AS "EMAIL", phoneNumber AS "Nomor HP",groupName AS "Nama Grups",GroupContact.id AS "ID GROUP CONTACT" FROM ((contact FULL JOIN GroupContact ON Contact.id = GroupContact.contactID) FULL JOIN Groups ON GroupContact.groupId = Groups.id)',(err,res)=>{
                    if(err){
                       return  reject(err)
                    }

                    return resolve(res);
                })
        })
    }

    static async delete(id){

        let deleteData = new Promise((resolve,rejects)=>{
            let query = `SELECT * FROM Contact WHERE id = '${id}'`
            db.all(query,(err,res)=>{
                if(err){
                    return rejects(err)
                }
                if(res.length == 0){
                    return rejects("data dengan id " + id + " tidak ditemukan")
                }

                let query = `DELETE FROM Contact WHERE id = '${id}'`;
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
    
    static async update(id,name,phoneNumber,company,email){
        let data = new Promise((resolve,reject)=>{
            //> node main.js update Contact <id> <name> <phoneNumber> <company> <email>

            let query = `SELECT * FROM Contact WHERE id = '${id}'`;
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

            db.all(`UPDATE Contact SET name = ?, phoneNumber = ?, company = ?,email = ? WHERE id = ?;`, [ name,phoneNumber,company,email,id],(err,res)=>{
               if(err){
                 return reject("update error "+err)
               }
               
                let query = `SELECT * FROM Contact WHERE id = '${id}'`;
                db.all(query,(err,res)=>{
                    if(err){
                        return reject(err);
                    }else{
                        res = res[0];
                        if((res.name != name || res.phoneNumber != phoneNumber || res.company != company || res.email != email)){
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


module.exports = Contact;