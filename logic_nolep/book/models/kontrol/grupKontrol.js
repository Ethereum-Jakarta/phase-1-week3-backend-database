let Group = require("../grup");

class GroupController {
    static async createGroup(groupName) {
        try {
            let id = await Group.create(groupName);
            console.log(`Group dengan ID ${id} berhasil dibuat.`);
        } catch (err) {
            console.error("Gagal membuat grup:", err);
        }
    }
}

module.exports = GroupController;