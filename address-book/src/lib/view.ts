import { CustomError } from "#address-book/lib/constant";
import type { Command } from "#address-book/lib/command";

export class View {
  public error(error: CustomError) {
    console.error(`[ERROR: ${error.name}]: `, error.message);
  }

  public help(commands: IterableIterator<Command>) {
    console.log("");
    console.log("=====================");
    console.log("ADDRESS BOOK COMMAND");
    console.log("=====================");
    console.log("");
    for (const cmd of commands) {
      if (!cmd.option.parent) continue;
      const result = [
        ">",
        cmd.option.parent,
        cmd.option.description,
      ];
      if (cmd.option.args && cmd.option.args.length > 0) {
        for (const arg of cmd.option.args) result.push(`${arg.optional ? "[" : "<"}${arg.name}${arg.optional ? "]" : ">"}`);
      }
      console.log(...result);
    }
    console.log("");
  }

  public create<T extends Object>(table: string, value: T) {
    console.log("")
    console.log("Berhasil ditambahkan, ke table", table);
    console.log("");
    console.table(value);
    console.log("");
  }

  public update<T extends Object>(table: string, id: number, value: T) {
    console.log("")
    console.log(`Berhasil mengubah Id ${id}, ke table`, table);
    console.log("");
    console.table(value);
    console.log("");
  }

  public delete(table: string, id: number) {
    console.log("");
    console.log(`Berhasil Menghapus Id ${id}, di table`, table);
    console.log("");
  }

  public show(data: unknown) {
    console.log("");
    console.table(data);
    console.log("");
  }
}
