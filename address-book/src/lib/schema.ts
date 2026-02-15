import type { DatabaseConnection } from "#address-book/lib/connection";

export class SchemaTable {
  public constructor(public db: DatabaseConnection) {}

  public init() {
    throw ReferenceError("must be overrided");
  }

  public create(_value: any) {
    throw ReferenceError("must be overrided");
  }

  public update(_id: number, _value: any) {
    throw ReferenceError("must be overrided");
  }

  public delete(_id: number) {
    throw ReferenceError("must be overrided");
  }

  public show(_id: number) {
    throw ReferenceError("must be overrided");
  }
}
