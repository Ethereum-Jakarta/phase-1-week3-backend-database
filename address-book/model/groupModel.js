const db = require('../connection')

class groupModel {
    static async createGroup(groupName){
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups VALUES (null, ?)`, [groupName], (err, result) => {
                if(err){
                    return reject(err.message)
                }

                return resolve(JSON.stringify(result))
            })
        })
    }

    static async showGroups(){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups`, (err, result) => {
                if(err){
                    return reject(err)
                }

                return resolve(result)
            })
        })
    }

    static async deleteGroups(id){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Groups WHERE id = ?`, [id], (err, result) => {
                let data = []

                if(err){
                    return reject(err)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                data.push(JSON.stringify(result))

                db.run(`DELETE FROM Groups WHERE id = ?`, [id], (err) =>{
                    if(err){
                        return reject(err)
                    }

                    return resolve(data)
                })
                
            })
        })
    }

    static async updateGroups(id, groupName){
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM Groups Where id = ?`, [id], (err, result) => {
                if(err){
                    return reject(err.message)
                }

                if(!result){
                    return reject('ID tidak ditemukan')
                }

                db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], (err) => {
                    if(err){
                        return reject(err.message)
                    }

                    db.get(`SELECT * FROM Groups WHERE id = ?`, [id], (err, result) => {
                        if(err){
                            return reject(err.message)
                        }

                        return resolve(JSON.stringify(result))
                    })
                })
            })
        })
    }
}

module.exports = groupModel