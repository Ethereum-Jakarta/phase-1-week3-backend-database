import db from "../config/database";
import { type Contact, type ModelResponses } from "../types/index.type";

export default class ContactModel {
  static {
    db.exec(`
            CREATE TABLE IF NOT EXISTS Contact (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
                phoneNumber TEXT NOT NULL
                company TEXT 
                email TEXT UNIQUE NOT NULL
            )
        `);
    console.log("Table users siap.");
  }

  public static createContact({
    nama,
    phoneNumber,
    company,
    email,
  }: Omit<Contact, "id">): ModelResponses<Contact> {
    const stmt = db.prepare(
      `INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`,
    );
    const result = stmt.run(nama, phoneNumber, company, email);

    const newContact: Contact = {
      id: result.lastInsertRowid as number,
      nama,
      phoneNumber,
      company,
      email,
    };

    return {
      success: true,
      message: "Create contact new contact succesfully",
      payload: newContact,
    };
  }

  public static updateContact({
    id,
    nama,
    phoneNumber,
    company,
    email,
  }: Contact): ModelResponses<Contact> {
    const stmt = db.prepare(
      `UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?`,
    );
    const result = stmt.run(nama, phoneNumber, company, email, id);

    if (!result.changes) {
      return { success: false, message: "Failed to update contact" };
    }

    const updatedContact: Contact = { id, nama, phoneNumber, company, email };
    return {
      success: true,
      message: "Data updated succesfully",
      payload: updatedContact,
    };
  }

  public static deleteContact(
    id: Pick<Contact, "id">,
  ): ModelResponses<Contact> {
    const stmt = db.prepare(`DELETE FROM Contact WHERE id = ?`);
    const result = stmt.run(id);

    if (!result.changes) {
      return { success: false, message: "Failed to update contact" };
    }

    return {
      success: true,
      message: "Data deleted succesfully",
    };
  }

  public static showContact(): ModelResponses<Contact[]> {
    const stmt = db.prepare(`SELECT * FROM Contact`);
    return {
      success: true,
      message: "Data deleted succesfully",
      payload: stmt.all() as Contact[],
    };
  }
}
