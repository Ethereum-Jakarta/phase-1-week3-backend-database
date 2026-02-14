import {
  InternalServerError,
  NotFoundError,
  ValidationError,
} from "../errors/app.error";
import { ContactGroupRepository } from "../repositories/contact-group.repository";
import type { ContactGroup, ContactGroupDTO } from "../types/index.type";

export class ContactGroupService {
  public static async createContactGroup({
    contact_id,
    group_id,
  }: ContactGroup): Promise<ContactGroupDTO> {
    if (!contact_id && !group_id) {
      throw new ValidationError({
        contact_id: "contact_id diperlukan!",
        group_id: "group_id diperlukan!",
      });
    }
    try {
      const newContactGroup = await ContactGroupRepository.createContactGroup(
        contact_id,
        group_id,
      );
      return newContactGroup;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async updateContactGroup(
    id: number,
    { contact_id, group_id }: ContactGroup,
  ): Promise<ContactGroupDTO> {
    if (!contact_id && !group_id) {
      throw new ValidationError({ input: "Minimal masukan sesuatu" });
    }
    try {
      const updatedContactGroup =
        await ContactGroupRepository.updateContactGroup(
          id,
          contact_id,
          group_id,
        );
      return updatedContactGroup;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async deleteContactGroup(id: number): Promise<number> {
    try {
      const deletedContactGroup =
        await ContactGroupRepository.deleteContactGroup(id);
      if (!deletedContactGroup) {
        throw new NotFoundError({
          id: `Gagal menghapus grup kontak, grup kontak dengan id = ${id} tidak ditemukan`,
        });
      }
      return deletedContactGroup;
    } catch (error: unknown) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new InternalServerError();
    }
  }
}
