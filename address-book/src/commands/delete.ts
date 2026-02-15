import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "delete",
  description: "to delete something on databases",
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
export default class DeleteCommand extends Command {
  public override exec() {
    const table = this.args.get("table");
    const rest = this.args.get("rest");
    
    let command: Command;
    switch(table) {
      case "Contact": command = this.client.commands.get("deleteContact")!; break;
      case "Groups": command = this.client.commands.get("deleteGroups")!; break;
      case "ContactGroup": command = this.client.commands.get("deleteContactGroup")!; break;
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
