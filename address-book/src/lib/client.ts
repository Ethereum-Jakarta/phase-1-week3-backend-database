import { Command } from "#address-book/lib/command";
import { DatabaseConnection } from "#address-book/lib/connection";
import { View } from "#address-book/lib/view";
import { CustomError } from "#address-book/lib/constant";

import { opendir } from "fs/promises";
import path from "path";
import { createInterface } from "readline/promises";
import process from "process";

export class Client {
  public view = new View();
  public db = new DatabaseConnection();
  public commands = new Map<string, Command>();

  public io = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  public async walk(directory: string = path.join(import.meta.dirname, "../commands")) {
    const dirs = await opendir(directory);
    for await (const item of dirs) {
      const dir = path.join(directory, item.name);
      if (item.isFile()) {
        const command = await import(dir).then(x => new x.default(this) as Command);
        this.commands.set(command.option.name, command);
      } else if (item.isDirectory()) {
        await this.walk(dir);
      }
    }
  }

  public async listenCLI() {
    this.commands.get("help")?.exec();
    while(true) {
      const response = await this.io.question("> ");
      if (response === "quit" || response === "exit") break;
      const [command, ...args] = response.trim().split(" ");
      const cmd = this.commands.get(command);
      if (!cmd) continue;
      try {
        cmd.validation(...args);
        cmd.exec();
        cmd.clearargs();
      } catch (e) {
        cmd.clearargs();
        if (e instanceof CustomError) this.view.error(e);
      }
    }
    this.io.close();
  }
}
