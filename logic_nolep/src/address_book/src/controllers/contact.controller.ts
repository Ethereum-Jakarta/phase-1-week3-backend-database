import ContactModel from "../models/contact.model";
import Views from "../view/index.view";
import { type Contact, type ModelResponses } from "../types/index.type";

export default class ContactController {
  public static createContact({ nama, phone_number, company, email }: Contact) {
    try {
      const newContact: ModelResponses<Contact> = ContactModel.createContact({
        nama,
        phone_number,
        company,
        email,
      });
    } catch (err) {
      Views.errorView(err);
    }
  }
  public static updateContact() {}
  public static deleteContact() {}
  public static showContact() {}
}
