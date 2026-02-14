class ContactView {
    static createSuccess(nama) {
        console.log(`✅ Contact ${nama} berhasil dibuat!!`);
    }

    static createError(){
        console.log(`❎ Gagal Membuat Contact!!!`)
    }

    static updateSuccess(nama) {
        console.log(`✅ Update Contact ${nama} berhasil!!`);
    }

    static updateError(){
        console.log(`❎ Gagal Update Contact!!!`)
    }

    static deleteSuccess() {
        console.log(`✅ Delete Contact berhasil!!`);
    }

    static deleteError(){
        console.log(`❎ Gagal Delete Contact!!!`)
    }

    static getSuccess(contact) {
        console.log(`✅ Barhasil menampilkan data!!`);
        console.log(`   Nama        : ${contact.Nama}`);
        console.log(`   Phone Number: ${contact.PhoneNumber}`);
        console.log(`   Company     : ${contact.Company}`);
        console.log(`   Email       : ${contact.Email}`);
    }

    static getError(id){
        console.log(`❎ Data ID ${id} tidak ditemukan!!!`)
    }

    static showSuccess(contacts) {
        console.log(`✅ Barhasil menampilkan data!!`);
        contacts.map((contact) => {
            console.log(`   Nama        : ${contact.Nama}`);
            console.log(`   Phone Number: ${contact.PhoneNumber}`);
            console.log(`   Company     : ${contact.Company}`);
            console.log(`   Email       : ${contact.Email}`);
            console.log("-----------------------------------")
        })
    }

    static showError(id){
        console.log(`❎ Data ID ${id} tidak ditemukan!!!`)
    }

    static allContactsSuccess(contacts) {
        console.log(contacts)
    }

     static allContactsError() {
        console.log("Gagal mengambil data contacts")
    }
}

module.exports = ContactView