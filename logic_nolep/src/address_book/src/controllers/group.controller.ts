import { GroupService } from "../services/group.services";
import type { AppResponse, GroupDTO } from "../types/index.type";
import { ConsoleView } from "../view/index.view";

export class GroupController {
  public static async createGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [group_name] = args;
    const newGroup: AppResponse<GroupDTO> = await GroupService.createGroup(
      group_name!
    );
    if (newGroup.success) {
      ConsoleView.showSuccess(newGroup.message);
    } else {
      ConsoleView.showError(newGroup.message);
    }
  }

  public static async updateGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [id, group_name] = args;
    const updatedGroup: AppResponse<GroupDTO> = await GroupService.updateGroup(
      Number(id!),
      group_name!
    );
    if (updatedGroup.success) {
      ConsoleView.showSuccess(updatedGroup.message);
    } else {
      ConsoleView.showError(updatedGroup.message);
    }
  }

  public static async deleteGroup(args: Array<string | undefined>) {
    if (args.length === 0) {
      ConsoleView.showError("Mohon masukan argumen yang diperlukan");
    }
    const [id] = args;
    const deletedGroup: AppResponse<GroupDTO> = await GroupService.deleteGroup(
      Number(id!)
    );
    if (deletedGroup.success) {
      ConsoleView.showSuccess(deletedGroup.message);
    } else {
      ConsoleView.showError(deletedGroup.message);
    }
  }

  public static async showGroups() {
    const allGroup: AppResponse<GroupDTO[]> = await GroupService.showGroups();
    if (allGroup.success) {
      ConsoleView.showSuccess(allGroup.message);
      ConsoleView.showTable(allGroup.data!);
    } else {
      ConsoleView.showError(allGroup.message);
    }
  }
}
