import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "showContact",
  description: "Contact",
  parent: "show",
})
export default class ShowContactCommand extends Command {
  public override exec() {
    const result = this.client.db.schema("Contact").show();
    this.client.view.show(result);
  }
}
