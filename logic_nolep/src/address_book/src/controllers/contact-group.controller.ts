import { ContactGroupService } from "../services/contact-group.services";
import type { AppResponse, ContactGroupDTO } from "../types/index.type";
import { ConsoleView } from "../view/index.view";

export class ContactGroupController {
  public static async createContactGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [contact_id, group_id] = args;
    const newContactGroup = await ContactGroupService.createContactGroup(
      Number(contact_id!),
      Number(group_id!)
    );
    if (newContactGroup.success) {
      ConsoleView.showSuccess(newContactGroup.message);
    } else {
      ConsoleView.showError(newContactGroup.message);
    }
  }

  public static async updateContactGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [id, contact_id, group_id] = args;
    const updatedContactGroup = await ContactGroupService.updateContactGroup(
      Number(id!),
      Number(contact_id!),
      Number(group_id!)
    );
    if (updatedContactGroup.success) {
      ConsoleView.showSuccess(updatedContactGroup.message);
    } else {
      ConsoleView.showError(updatedContactGroup.message);
    }
  }

  public static async deleteContactGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [id] = args;
    const updatedContactGroup = await ContactGroupService.deleteContactGroup(
      Number(id!)
    );
    if (updatedContactGroup.success) {
      ConsoleView.showSuccess(updatedContactGroup.message);
    } else {
      ConsoleView.showError(updatedContactGroup.message);
    }
  }
}
