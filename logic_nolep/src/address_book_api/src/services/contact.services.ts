import {
  InternalServerError,
  NotFoundError,
  ValidationError,
} from "../errors/app.error";
import { ContactRepository } from "../repositories/contact.repository";
import type { Contact, ContactDTO } from "../types/index.type";

export class ContactService {
  public static async createContact({
    name,
    phone_number,
    company,
    email,
  }: Contact): Promise<ContactDTO> {
    if (!name) throw new ValidationError({ nama: "Nama kontak diperlukan!" });
    try {
      const newContact: ContactDTO = await ContactRepository.createContact(
        name,
        phone_number,
        company,
        email,
      );
      return newContact;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async updateContact(
    id: number,
    { name, phone_number, company, email }: Contact,
  ): Promise<ContactDTO> {
    if (!name)
      throw new ValidationError({
        nama: "Nama kontak diperlukan!",
      });
    try {
      const updatedContact = await ContactRepository.updateContact(
        id!,
        name!,
        phone_number,
        company,
        email,
      );
      return updatedContact;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }

  public static async deleteContact(id: number): Promise<Number> {
    try {
      const deletedContact = await ContactRepository.deleteContact(id);
      if (deletedContact === 0) {
        throw new NotFoundError({
          id: `Gagal menghapus kontak, kontak dengan id = ${id} tidak ditemukan`,
        });
      }
      return deletedContact;
    } catch (error: unknown) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new InternalServerError();
    }
  }

  public static async showContacts(): Promise<ContactDTO[]> {
    try {
      const allContacts = await ContactRepository.showContacts();
      return allContacts;
    } catch (error: unknown) {
      throw new InternalServerError();
    }
  }
}
