let db = require("../connection/connection.js");

class Groups{
    constructor(groupName){
        this.groupName = groupName
    }

    static async create(groupName){
        let newGroup = new Groups(groupName);
        return new Promise((resolve, reject)=>{
          
              
                db.run(
                    `INSERT INTO Groups VALUES (null,?)`,
                    [newGroup.groupName],
                 
                (err)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve();
                    }
                })
                
           
           
        })
    }

    static async update(id, groupName){
        
        return new Promise((resolve, reject)=>{
          
              
            db.run(
                `UPDATE Groups SET groupName=? WHERE id=?`,
                [groupName, id],
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
            db.run(`DELETE FROM GroupContact WHERE Groupid=?`,
            [id],
            (err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve();
                }
            }
            );
            
            db.run(`DELETE FROM Groups WHERE id=?`, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
    }

    static async show(){
        return new Promise((resolve, reject)=>{
            db.all(`
            select * from 
            Groups join GroupContact
            on Groups.id = GroupContact.GroupId
            join Contact
            on GroupContact.ContactId = Contact.id;


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

module.exports = Groups;