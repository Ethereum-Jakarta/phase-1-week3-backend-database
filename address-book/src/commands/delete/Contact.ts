import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "deleteContact",
  description: "Contact",
  parent: "delete",
  args: [
    {
      name: "id",
      type: "number",
    },
  ]
})
export default class DeleteContactCommand extends Command {
  public override exec() {
    const id: number = this.args.get("id")!;

    this.client.db.schema("Contact").delete(id);
    this.client.view.delete("Contact", id);
  }
}
