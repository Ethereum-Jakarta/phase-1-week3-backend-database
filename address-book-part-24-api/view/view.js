//const {displayMenu} = require('./string')
class View {
    static error(err,res){
        console.log(`
        ~= Notifikasi (X_X) =~ \n
        Error Terdeteksi dengan keterangan sebagai berikut : \n
        ${err}
        `)
        res.status(404).json({
        "status" : 404,
        "message" : `
        ~= Notifikasi (X_X) =~ \n
        Error Terdeteksi dengan keterangan sebagai berikut : \n
        ${err},
        `,
        })
    }
    static berhasil(data,res){
        res.json({
            "status" : 200,
            "message" : "berhasil",
            "data" : data,
        })
        console.log(`
        ~= Notifikasi (0_0) =~ \n
        Berhasil melakukan Eksiekusi :\n`);
    }
    static tabel(command,tabel,res){
        console.log(`
        ~= Notifikasi (0_0) =~ \n
        Berhasil melakukan Eksiekusi :\n
        ${command}\n
        Data tabel :\n`)

        console.table(tabel)

        res.json(tabel);
        

    }
}

module.exports = View;