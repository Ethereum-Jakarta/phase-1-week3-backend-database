import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "update",
  description: "to update something on databases",
  args: [
    {
      name: "table",
      type: "string",
      validation: ["Contact", "Groups", "ContactGroup"],
    },
    {
      name: "rest",
      type: "string",
      rest: true,
    }
  ]
})
export default class UpdateCommand extends Command {
  public override exec() {
    const table = this.args.get("table");
    const rest = this.args.get("rest");
    
    let command: Command;
    switch(table) {
      case "Contact": command = this.client.commands.get("updateContact")!; break;
      case "Groups": command = this.client.commands.get("updateGroups")!; break;
      case "ContactGroup": command = this.client.commands.get("updateContactGroup")!; break;
      default: throw "";
    }

    try {
      command.validation(...rest);
      command.exec();
      command.clearargs();
    } catch (error) {
      command.clearargs();
      throw error;
    }
  }
}
