import { SchemaTable } from "#address-book/lib/schema";

interface GroupContactSchemaValue {
  contactId: number,
  groupId: number,
}

export class GroupContactSchemaTable extends SchemaTable {
  public override init() {
    const query = `
      CREATE TABLE IF NOT EXISTS GroupContact (
        id INTEGER PRIMARY KEY,
        ContactId INTEGER,
        GroupId INTEGER
      )
    `;
    this.db.exec(query);
    return this;
  }

  public override create(value: GroupContactSchemaValue) {
    const query = `
      INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)
    `;
    const bindings = [
      value.groupId,
      value.contactId,
    ];
    this.db.exec(query, bindings);
  }

  public override update(id: number, value: GroupContactSchemaValue) {
    const query = `
      UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?
    `;

    const bindings = [
      value.contactId,
      value.groupId,
      id
    ];

    this.db.exec(query, bindings);
  }

  public override delete(id: number) {
    const query = `
      DELETE FROM GroupContact WHERE id = ?
    `;

    const bindings = [
      id
    ];

    this.db.exec(query, bindings);
  }
}
