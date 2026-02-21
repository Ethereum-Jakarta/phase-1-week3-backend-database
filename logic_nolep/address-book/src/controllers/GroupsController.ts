import { GroupsModel } from "../models/GroupsModel.js";
import { View } from "../views/View.js";


export class GroupsController {
    static async showAll() {
        try {
            const groups = await GroupsModel.findAll();
            View.renderGroups(groups)
        } catch (err) {
            View.renderError(err);
        }
    }

    static async addGroups(groupName: string) {
        try {
            const newGroups = await GroupsModel.create(groupName);
            View.renderSuccess(`Group ${newGroups.groupName} created with ID ${newGroups.id}`);
        } catch (err) {
            View.renderError(err);
        }
    }

    static async updateGroups(id: number, groupName: string) {
        try {
            const updated = await GroupsModel.update(id, groupName);
            if (!updated) {
                View.renderError(new Error(`Groups with ID ${id} not found.`));
            } else {
                View.renderSuccess(`Success update group with ID ${updated.id}`);
            }
        } catch (err) {
            View.renderError(err);
        }
    }

    static async deleteGroups(id: number) {
        try {
            const deleted = await GroupsModel.delete(id);
            if (!deleted) {
                View.renderError(new Error(`Groups with ID ${id} not found.`));
            } else {
                View.renderSuccess(`Success delete group with ID ${deleted.id}`);
            }
        } catch (err) {
            View.renderError(err);
        }
    }
}