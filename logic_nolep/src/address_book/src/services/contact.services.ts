import { ContactRepository } from "../repositories/contact.repository";
import type { Contact, AppResponse } from "../types/index.type";

export class ContactServices {
  public static async createContact(
    name: string,
    phone_number?: string,
    company?: string,
    email?: string
  ): Promise<AppResponse<Contact>> {
    if (!name) {
      throw new Error("NAME IS REQUIRED!");
    }

    const newContact = await ContactRepository.createContact(
      name,
      phone_number,
      company,
      email
    );

    return {
      success: true,
      message: "create new contact succes",
      payload: newContact,
    };
  }

  public static async updateContact(
    id: number,
    name: string,
    phone_number?: string,
    company?: string,
    email?: string
  ): Promise<AppResponse<Contact>> {
    if (!name && !id) {
      throw new Error("NAME AND ID IS REQUIRED!");
    }
    const updatedContact = await ContactRepository.updateContact(
      id,
      name,
      phone_number,
      company,
      email
    );

    return {
      success: true,
      message: "update contact succes",
      payload: updatedContact,
    };
  }

  public static async deleteContact(id: number): Promise<AppResponse<null>> {
    const deleteContact = await ContactRepository.deleteContact(id);
    if (deleteContact) {
      return {
        success: true,
        message: `deleted contact id = ${id} succes`,
      };
    } else {
      return {
        success: false,
        message: `contact with id = ${id} is not found!`,
      };
    }
  }
}
