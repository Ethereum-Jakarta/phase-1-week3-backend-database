class ContactGroupsView {
    static createSuccess(nama) {
        console.log(`✅ Groups Contact berhasil dibuat!!`);
    }

    static createError(){
        console.log(`❎ Gagal Membuat Groups Contact!!!`)
    }

    static updateSuccess() {
        console.log(`✅ Update Group Contact berhasil!!`);
    }

    static updateError(){
        console.log(`❎ Gagal Update Group Contact!!!`)
    }

    static deleteSuccess() {
        console.log(`✅ Delete Group Contact berhasil!!`);
    }

    static deleteError(){
        console.log(`❎ Gagal Delete Group Contact!!!`)
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

     // static showSuccess(contacts) {
    //     console.log(`✅ Barhasil menampilkan data!!`);
    //     contacts.map((contact) => {
    //         console.log(`   Nama        : ${contact.Nama}`);
    //         console.log(`   Phone Number: ${contact.PhoneNumber}`);
    //         console.log(`   Company     : ${contact.Company}`);
    //         console.log(`   Email       : ${contact.Email}`);
    //         console.log("-----------------------------------")
    //     })
    // }

    static showError(id){
        console.log(`❎ Data ID ${id} tidak ditemukan!!!`)
    }
}

module.exports = ContactGroupsView