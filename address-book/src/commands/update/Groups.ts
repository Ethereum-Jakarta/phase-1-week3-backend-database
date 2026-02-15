import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "updateGroups",
  description: "Groups",
  parent: "update",
  args: [
    {
      name: "id",
      type: "number"
    },
    {
      name: "groupName",
      type: "string"
    }
  ]
})
export default class UpdateGroupsCommand extends Command {
  public override exec() {
    const id = this.args.get("id");
    const groupName = this.args.get("groupName")!;

    this.client.db.schema("Groups").update(id, { groupName });

    this.client.view.update("Groups", id, { groupName });
  }
}
