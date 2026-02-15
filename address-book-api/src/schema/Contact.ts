import { SchemaTable } from "#address-book/lib/schema";

interface ContactSchemaValue {
  name: string,
  phoneNumber: number,
  company: string,
  email: string,
}

export class ContactSchemaTable extends SchemaTable {
  public override init() {
    const query = `
      CREATE TABLE IF NOT EXISTS Contact (
        id INTEGER PRIMARY KEY,
        name TEXT,
        phoneNumber INTEGER UNIQUE,
        company TEXT,
        email TEXT UNIQUE
      )
    `;
    this.db.exec(query);
    return this;
  }

  public override create(value: ContactSchemaValue) {
    const query = `
      INSERT INTO Contact (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)
    `;
    const bindings = [
      value.name,
      value.phoneNumber,
      value.company,
      value.email
    ];
    this.db.exec(query, bindings);
  }

  public override update(id: number, value: ContactSchemaValue) {
    const query = `
      UPDATE Contact SET name = ?, phoneNumber = ?, company = ?, email = ? WHERE id = ?
    `;

    const bindings = [
      value.name,
      value.phoneNumber,
      value.company,
      value.email,
      id
    ];

    this.db.exec(query, bindings);
  }

  public override delete(id: number) {
    const query = `
      DELETE FROM Contact WHERE id = ?
    `;

    const bindings = [
      id
    ];

    this.db.exec(query, bindings);
  }

  public override show() {
    const query = `
      SELECT * FROM Contact
      JOIN GroupContact
        ON Contact.id = GroupContact.ContactId
        JOIN Groups
          ON GroupContact.GroupId = Groups.id
    `;

    return this.db.query(query).all();
  }
}
