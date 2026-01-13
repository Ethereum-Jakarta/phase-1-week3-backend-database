import { pool } from "../db/pool";
import type { Contact } from "../types/index.type";

export class ContactRepository {
  public static async createContact(
    name: string,
    phone_number?: string,
    company?: string,
    email?: string
  ): Promise<Contact> {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, company)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
      [name, email, phone_number, company]
    );

    return result.rows[0];
  }

  public static async updateContact(
    id: number,
    name: string,
    phone_number?: string,
    company?: string,
    email?: string
  ): Promise<Contact> {
    const result = await pool.query(
      `
    UPDATE contacts
    SET name = $2, email = $3, phone = $4, company = $5
    WHERE contact_id = $1
    RETURNING *
    `,
      [id, name, email, phone_number, company]
    );

    return result.rows[0];
  }

  public static async deleteContact(id: number): Promise<boolean> {
    const result = await pool.query(
      `DELETE FROM contacts WHERE contact_id = $1`,
      [id]
    );

    return result.rowCount === 1;
  }
}
