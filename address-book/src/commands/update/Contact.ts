import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "updateContact",
  description: "Contact",
  parent: "update",
  args: [
    {
      name: "id",
      type: "number",
    },
    {
      name: "name",
      type: "string"
    },
    {
      name: "phoneNumber",
      type: "number"
    },
    {
      name: "company",
      type: "string"
    },
    {
      name: "email",
      type: "string",
    }
  ]
})
export default class UpdateContactCommand extends Command {
  public override exec() {
    const id: number = this.args.get("id")!;
    const name: string = this.args.get("name")!;
    const phoneNumber: number = this.args.get("phoneNumber")!;
    const company: string = this.args.get("company")!;
    const email: string = this.args.get("email")!;

    this.client.db.schema("Contact").update(id, { name, phoneNumber, company, email });

    this.client.view.update("Contact", id, { name, phoneNumber, company, email });
  }
}
