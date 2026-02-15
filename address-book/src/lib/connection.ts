import { Database as SQLDatabase } from "bun:sqlite";
import { DB_PATH } from "#address-book/lib/constant";

//smegma
import type { SchemaTable } from "#address-book/lib/schema";
import { ContactSchemaTable } from "#address-book/schema/Contact";
import { GroupContactSchemaTable } from "#address-book/schema/GroupContact";
import { GroupsSchemaTable } from "#address-book/schema/Groups";

export class DatabaseConnection extends SQLDatabase {
  private schemas = new Map<string, SchemaTable>();

  public constructor() {
    super(DB_PATH);
    this.registerSchema();
  }

  public schema(name: "Contact"): ContactSchemaTable
  public schema(name: "GroupContact"): GroupContactSchemaTable
  public schema(name: "Groups"): GroupsSchemaTable
  public schema(name: string): SchemaTable | undefined {
    return this.schemas.get(name);
  }

  private registerSchema() {
    this.schemas.set("Contact", new ContactSchemaTable(this).init());
    this.schemas.set("GroupContact", new GroupContactSchemaTable(this).init());
    this.schemas.set("Groups", new GroupsSchemaTable(this).init());
  }

}
