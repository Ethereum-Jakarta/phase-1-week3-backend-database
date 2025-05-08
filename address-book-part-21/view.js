const {displayMenu} = require('./string')
class View {
    static error(err){
        console.log(`
        ~= Notifikasi (X_X) =~ \n
        Error Terdeteksi dengan keterangan sebagai berikut : \n
        ${err}
        `)
    }
    static berhasil(command){
        console.log(`
        ~= Notifikasi (0_0) =~ \n
        Berhasil melakukan Eksiekusi :\n
        ${command}
        `)
    }
    static tabel(command,tabel){
        console.log(`
        ~= Notifikasi (0_0) =~ \n
        Berhasil melakukan Eksiekusi :\n
        ${command}\n
        Data tabel :\n`)

        console.table(tabel)
        
    }
}

module.exports = View;