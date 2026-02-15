import { Client } from "#address-book/lib/client";
import { CustomError } from "#address-book/lib/constant";

export class Command {
  public constructor(public option: CommandOption, public client: Client) {}

  public validation(...argument: string[]) {
    if (this.option.args && this.option.args.length > 0) this.argsparse(argument);
  }

  public args = new Map<string, any>();

  public exec() {
    throw ReferenceError("exec function mesti di override kn lh le...");
  }

  public clearargs() {
    this.args.clear();
  }

  private argsparse(argsString: string[]) {
    for (let i = 0; i < this.option.args!.length; i++) {
      const arg = argsString[i], option = this.option.args![i];
      if (option.rest) {
        const sliced = argsString.slice(i, argsString.length);
        this.args.set(option.name, sliced);
        break;
      }
      if (!arg) {
        if (option.optional) break;
        else throw new CustomError("Argument Kurang !", `<${option.name}> harus diisi`);
      }
      let result: any;
      if (option.type === "number") {
        result = parseInt(arg);
        if (isNaN(result)) throw new CustomError("Tipe Argument Salah !", `${option.optional ? "[" : "<"}${option.name}${option.optional ? "]" : ">"} harus ber tipe number`);
      } else {
        result = arg;
      }
      if (option.validation && !option.validation.includes(result)) throw new CustomError("Pilihan Salah !", `${option.optional ? "[" : "<"}${option.name}${option.optional ? "]" : ">"} harus diisi: ${option.validation.join(", ")}`);

      this.args.set(option.name, result);
    }
  }
}

export interface CommandOption {
  name: string,
  description: string,
  args?: Argument[],
  parent?: string,
}

export interface Argument {
  name: string,
  type: "string" | "number" | "unparsed_number",
  optional?: boolean,
  rest?: boolean,
  validation?: (string|number)[],
}
