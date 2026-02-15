import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "deleteContactGroup", 
  description: "ContactGroup",
  parent: "delete",
  args: [
    {
      name: "id",
      type: "number"
    },
  ]
})
export default class DeleteGroupContactCommand extends Command {
  public override exec() {
    const id = this.args.get("id")!;

    this.client.db.schema("GroupContact").delete(id);
    this.client.view.delete("GroupContact", id);
  }
}
