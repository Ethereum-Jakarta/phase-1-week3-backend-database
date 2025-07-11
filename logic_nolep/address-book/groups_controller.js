import Groups from './groups_model.js';
import BookView from './view.js';

class GroupsController {
    static async create(groupName) {
        try {
            let buat = await Groups.create(groupName);
            BookView.createGroups(buat);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async update(id, groupName) {
        try {
            let ubah = await Groups.update(id, groupName);
            BookView.updateGroups(ubah);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async delete(id) {
        try {
            let hapus = await Groups.delete(id);
            BookView.deleteGroups(hapus);
        } catch (error) {
            BookView.errorView(error);
        }
    }

    static async showGroups() {
        try {
            let result = await Groups.showGroups();
            BookView.showGroups(result);
        } catch (error) {
            BookView.errorView(error);
        }

    }
}

export default GroupsController;