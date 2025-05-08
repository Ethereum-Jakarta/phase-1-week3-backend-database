let db = require("../connection/connection.js");

class GroupContact{
    constructor(contactId, groupId){
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static create(contactId, groupId){
        let newGroupContact = new GroupContact(contactId, groupId);
        return new Promise((resolve, reject)=>{
          
              
                db.run(
                    `INSERT INTO GroupContact VALUES (null,?,?)`,
                    [newGroupContact.contactId, newGroupContact.groupId],
                 
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                })
                
           
           
        })
    }

    static update(id, contactId, groupId){
        
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

    static delete(id){       
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