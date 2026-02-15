import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "updateContactGroup", 
  description: "ContactGroup",
  parent: "update",
  args: [
    {
      name: "id",
      type: "number"
    },
    {
      name: "contactId",
      type: "number",
    },
    {
      name: "groupId",
      type: "number",
    }
  ]
})
export default class UpdateGroupContactCommand extends Command {
  public override exec() {
    const id = this.args.get("id")!;
    const contactId = this.args.get("contactId")!;
    const groupId = this.args.get("groupId")!;

    this.client.db.schema("GroupContact").update(id, { contactId, groupId });

    this.client.view.update("GroupContact", id, { contactId, groupId });
  }
}
