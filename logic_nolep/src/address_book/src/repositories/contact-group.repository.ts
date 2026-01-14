import { pool } from "../db/pool";

export class ContactGroupRepository {
  public static async createContactGroup(contact_id: number, group_id: number) {
    const newContactGroup = await pool.query(
      `INSERT INTO contact_group (contact_id, group_id)
      VALUES ($1, $2)
      RETURNING *`,
      [contact_id, group_id]
    );
  }

  public static async updateContactGroup(
    id: number,
    contact_id: number,
    group_id: number
  ) {
    const updatedContactGroup = await pool.query(
      `UPDATE contact_group
      SET contact_id = $2, contact_name = $3
      WHERE contact_group_id = $1
      RETURNING *`,
      [id, contact_id, group_id]
    );
    return updatedContactGroup.rows[0];
  }

  public static async deleteContactGroup(id: number) {
    const deletedContact = await pool.query(
      `DELETE FROM contact_groups WHERE contact_group_id = $1`,
      [id]
    );
    return deletedContact.rowCount === 1;
  }
}
