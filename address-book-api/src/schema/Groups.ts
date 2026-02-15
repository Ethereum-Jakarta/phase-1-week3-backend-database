import { SchemaTable } from "#address-book/lib/schema";

interface GroupsSchemaValue {
  groupName: string,
}

export class GroupsSchemaTable extends SchemaTable {
  public override init() {
    const query = `
      CREATE TABLE IF NOT EXISTS Groups (
        id INTEGER PRIMARY KEY,
        groupName TEXT
      )
    `;
    this.db.exec(query);
    return this;
  }

  public override create(value: GroupsSchemaValue) {
    const query = `
      INSERT INTO Groups (groupName) VALUES (?)
    `;

    const bindings = [
      value.groupName,
    ];

    this.db.exec(query, bindings);
  }

  public override update(id: number, value: GroupsSchemaValue) {
    const query = `
      UPDATE Groups SET groupName = ? WHERE id = ?
    `;

    const bindings = [
      value.groupName,
      id
    ];

    this.db.exec(query, bindings);
  }

  public override delete(id: number) {
    const query = `
      DELETE FROM Groups WHERE id = ?;
      DELETE FROM GroupContact WHERE GroupId = ?;
    `;

    const bindings = [
      id,
    ]

    this.db.exec(query, bindings);
  }

  public override show() {
    const query = `
      SELECT * FROM Groups
      JOIN GroupContact
        ON Groups.id = GroupContact.GroupId
        JOIN Contact
          ON GroupContact.ContactId = Contact.id
    `;

    return this.db.query(query).all();
  }
}
