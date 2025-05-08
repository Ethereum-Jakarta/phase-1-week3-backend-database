let db = require("../connection/connection.js");


class Contact{
    constructor(name, phoneNumber, company, email){
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.company = company,
        this.email = email
    }

    

    static create(name, phoneNumber, company, email){
        let newContact = new Contact(name, phoneNumber, company, email);
        return new Promise((resolve, reject)=>{
          
              
                db.run(
                    `INSERT INTO Contact VALUES (null,?,?,?,?)`,
                    [newContact.name, newContact.phoneNumber, newContact.company, newContact.email],
                 
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                })
                
           
           
        })
    }

    static update(id,name,phoneNumber,company,email){
        return new Promise((resolve,reject)=>{
            db.run(
                `UPDATE Contact SET name=?, phoneNumber=?, company=?, email=? WHERE id=?`,
                [name,phoneNumber,company,email,id],
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                }
            )
        })
    }

    static delete(id){
        return new Promise((resolve,reject)=>{
            db.run(`DELETE FROM Contact WHERE id=?`,
            [id],
            (err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve();
                }
            }
            )
        })
    }

    static show(){
        return new Promise((resolve, reject)=>{
            db.all(`
            select * from 
            Contact join GroupContact
            on Contact.id = GroupContact.ContactId
            join Groups 
            on GroupContact.GroupId = Groups.id;

            `,
            (err, rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows);
                }
            })
        })
    }


}

module.exports = Contact;