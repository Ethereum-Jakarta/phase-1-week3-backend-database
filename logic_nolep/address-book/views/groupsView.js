class GroupsView {
    static createSuccess(groupName) {
        console.log(`✅ Group ${groupName} berhasil dibuat!!`);
    }

    static createError(){
        console.log(`❎ Gagal Membuat Group!!!`)
    }

    static updateSuccess(groupName) {
        console.log(`✅ Update Group ${groupName} berhasil!!`);
    }

    static updateError(){
        console.log(`❎ Gagal Update Group!!!`)
    }

    static deleteSuccess() {
        console.log(`✅ Delete Group berhasil!!`);
    }

    static deleteError(){
        console.log(`❎ Gagal Delete Group!!!`)
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

    static showSuccess(results) {
      if (results.length === 0) {
        console.log("❎ Group tidak ditemukan")
        return;
      }

      const groupName = results[0].GroupName;
      console.log(`📌 Group: ${groupName}`);
      console.log(`👥 Members:`);

      let hasMember = false;
      results.forEach(data => {
        if (data.IDContact) {
            hasMember =true;
            console.log(` - ${data.Nama} (${data.IDContact})`);
        }
      });

      if (!hasMember) {
        console.log(" - (Belum ada anggota)");
      }
    }

    static allGroupSuccess(results) {
      if (results.length === 0) {
        console.log("❎ Belum ada group")
        return;
      }

      let currentGroup = null;
      let hasMember = false;

      results.forEach((data, index) => {
        if (currentGroup !== data.IDGroup) {
            if (currentGroup !== null && !hasMember) {
                if (!hasMember) console.log(" - (Belum ada anggota)")
                    console.log("")
            }

            currentGroup = data.IDGroup;
            hasMember = false;

            console.log(`📌 Group: ${data.GroupName}`);
            console.log(`👥 Members:`);

            if (data.IDContact) {
                hasMember = true;
                console.log(` - ${data.Nama} (${data.IDContact})`);
            }

            if (index === results.length - 1 && !hasMember) {
                console.log(" - (Belum ada anggota)")
            }
        }
      })
    }

    static showError(id){
        console.log(`❎ Data ID ${id} tidak ditemukan!!!`)
    }
}

module.exports = GroupsView