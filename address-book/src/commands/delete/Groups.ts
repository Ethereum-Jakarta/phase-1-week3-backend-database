import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "deleteGroups",
  description: "Groups",
  parent: "delete",
  args: [
    {
      name: "id",
      type: "number"
    },
  ]
})
export default class DeleteGroupsCommand extends Command {
  public override exec() {
    const id = this.args.get("id");

    this.client.db.schema("Groups").delete(id);
    this.client.view.delete("Groups", id);
  }
}
