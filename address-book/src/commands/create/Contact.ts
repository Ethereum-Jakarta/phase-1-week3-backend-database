import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "createContact",
  description: "Contact",
  parent: "create",
  args: [
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
export default class CreateContactCommand extends Command {
  public override exec() {
    const name: string = this.args.get("name")!;
    const phoneNumber: number = this.args.get("phoneNumber")!;
    const company: string = this.args.get("company")!;
    const email: string = this.args.get("email")!;

    this.client.db.schema("Contact").create({ name, phoneNumber, company, email });

    this.client.view.create("Contact", { name, phoneNumber, company, email });
  }
}
