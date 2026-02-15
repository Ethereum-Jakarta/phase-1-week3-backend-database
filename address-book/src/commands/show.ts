import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "show",
  description: "to show something on databases",
  args: [
    {
      name: "table",
      type: "string",
      validation: ["Contact", "Groups"],
    },
  ]
})
export default class ShowCommand extends Command {
  public override exec() {
    const table = this.args.get("table");
    
    let command: Command;
    switch(table) {
      case "Contact": command = this.client.commands.get("showContact")!; break;
      case "Groups": command = this.client.commands.get("showGroups")!; break;
      default: throw "";
    }

    try {
      command.validation();
      command.exec();
      command.clearargs();
    } catch (error) {
      command.clearargs();
      throw error;
    }
  }
}
