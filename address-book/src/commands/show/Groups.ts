import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "showGroups",
  description: "Groups",
  parent: "show",
})
export default class ShowGroupsCommand extends Command {
  public override exec() {
    const result = this.client.db.schema("Groups").show();
    this.client.view.show(result);
  }
}
