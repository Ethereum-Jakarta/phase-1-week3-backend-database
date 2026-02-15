export const DB_PATH = "./db/address-book.db";

export class CustomError extends Error {
  public constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}
