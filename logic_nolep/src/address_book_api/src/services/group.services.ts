import {
  InternalServerError,
  ValidationError,
  NotFoundError,
} from "../errors/app.error";
import { GroupRepository } from "../repositories/group.repository";
import type { Group, GroupDTO } from "../types/index.type";

export class GroupService {
  public static async createGroup({ group_name }: Group): Promise<GroupDTO> {
    if (!group_name) {
      throw new ValidationError({ group_name: "Nama group diperlukan" });
    }
    try {
      const newContact = await GroupRepository.createGroup(group_name);
      return newContact;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async updateGroup(
    group_id: number,
    { group_name }: Group,
  ): Promise<GroupDTO> {
    if (!group_name) {
      throw new ValidationError({ group_name: "Nama group diperlukan" });
    }
    try {
      const updatedGroup = await GroupRepository.updateGroup(
        group_id,
        group_name,
      );
      return updatedGroup;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async deleteGroup(id: number): Promise<number> {
    try {
      const deletedGroup = await GroupRepository.deleteGroup(id);
      if (!deletedGroup) {
        throw new NotFoundError({
          id: "Gagal menghapus group, group dengan id = ${id} tidak ditemukan",
        });
      }
      return deletedGroup;
    } catch (error: unknown) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new InternalServerError();
    }
  }

  public static async showGroups(): Promise<GroupDTO[]> {
    try {
      const allGroup = await GroupRepository.showGroups();
      return allGroup;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }
}
