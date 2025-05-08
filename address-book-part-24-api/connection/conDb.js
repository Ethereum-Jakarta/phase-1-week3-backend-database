let sqlite3 = require("sqlite3").verbose();

const conn = (pathDB)=>{
    try {
        let db =new sqlite3.Database(pathDB);
        return db
    } catch (error) {
        console.log(error);
    }
}



module.exports = conn;