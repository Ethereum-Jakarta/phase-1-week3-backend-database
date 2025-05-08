let db = require("../connection/connection.js");

class GroupContact{
    constructor(contactId, groupsId){
        this.contactId = contactId;
        this.groupsId = groupsId;
    }

    static async create(contactId, groupId){
        let newGroupContact = new GroupContact(contactId, groupId);
        return new Promise((resolve, reject)=>{
          
              
                db.run(
                    `INSERT INTO GroupContact VALUES (null,?,?)`,
                    [newGroupContact.contactId, newGroupContact.groupsId],
                 
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                })
                
           
           
        })
    }

    static async update(id, contactId, groupId){
        
        return new Promise((resolve, reject)=>{
          
              
            db.run(
                `UPDATE GroupContact SET ContactId=?, GroupId=? WHERE id=?`,
                [contactId,groupId, id],
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

    static async delete(id){       
        return new Promise((resolve, reject)=>{          
            db.run(`DELETE FROM GroupContact WHERE id=?`,
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
}

module.exports = GroupContact;