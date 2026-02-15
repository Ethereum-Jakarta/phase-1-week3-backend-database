import { Command, type CommandOption } from "#address-book/lib/command";
import { ApplyMetadata } from "#address-book/lib/decorator";

@ApplyMetadata<CommandOption>({
  name: "help",
  description: "help command",
})
export default class HelpCommand extends Command {
  public exec() {
    const commands = this.client.commands.values();
    this.client.view.help(commands);
  }
}
