import { GroupContactModel } from "../models/GroupContactModel.js";
import { View } from "../views/View.js";

export class GroupContactController {
    static async addGroupContact(ContactId: number, GroupId: number) {
        try {
            const newGroupContact = await GroupContactModel.create(ContactId, GroupId);
            View.renderSuccess(newGroupContact);
        } catch (err) {
            View.renderError(err);
        }
    }

    static async updateGroupContact(id: number, ContactId: number, GroupId: number) {
        try {
            const updated = await GroupContactModel.update(id, ContactId, GroupId);
            if (!updated) {
                View.renderError(new Error(`GroupContact with ID ${id} not found.`));
            } else {
                View.renderSuccess(`Success update GroupContact with ID ${updated.id}`);
            }
        } catch (err) {
            View.renderError(err);
        }
    }

    static async deleteGroupContact(id: number) {
        try {
            const deleted = await GroupContactModel.delete(id);
            if (!deleted) {
                View.renderError(new Error(`GroupContact with ID ${id} not found.`));
            } else {
                View.renderSuccess(`Success delete GroupContact with ID ${deleted.id}`);
            }
        } catch (err) {
            View.renderError(err);
        }
    }
}