import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "create",
  description: "to add something to databases",
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
export default class CreateCommand extends Command {
  public override exec() {
    const table = this.args.get("table");
    const rest = this.args.get("rest");
    
    let command: Command;
    switch(table) {
      case "Contact": command = this.client.commands.get("createContact")!; break;
      case "Groups": command = this.client.commands.get("createGroups")!; break;
      case "ContactGroup": command = this.client.commands.get("createContactGroup")!; break;
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
