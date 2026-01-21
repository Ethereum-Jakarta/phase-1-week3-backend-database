import { ValidationError } from "../errors/app.error";

export class RequestValidation {
  public static validatCreateContact(input : {nam}) {
    const errors: Record<string, string> = {};

    const hasUpdateField = input.name || input.email || 

    if (!hasUpdateField) {
      errors._base = "Minimal satu field harus diubah";
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }
  }
}
