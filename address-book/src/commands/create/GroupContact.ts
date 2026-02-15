import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "createContactGroup", 
  description: "ContactGroup",
  parent: "create",
  args: [
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
export default class CreateGroupContactCommand extends Command {
  public override exec() {
    const contactId = this.args.get("contactId")!;
    const groupId = this.args.get("groupId")!;

    this.client.db.schema("GroupContact").create({ contactId, groupId });

    this.client.view.create("GroupContact", { contactId, groupId });
  }
}
