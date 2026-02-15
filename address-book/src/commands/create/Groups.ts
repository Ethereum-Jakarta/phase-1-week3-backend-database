import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "createGroups",
  description: "Groups",
  parent: "create",
  args: [
    {
      name: "groupName",
      type: "string"
    }
  ]
})
export default class CreateGroupsCommand extends Command {
  public override exec() {
    const groupName = this.args.get("groupName")!;

    this.client.db.schema("Groups").create({ groupName });

    this.client.view.create("Groups", { groupName });
  }
}
