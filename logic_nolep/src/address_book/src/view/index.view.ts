import chalk from "chalk";

export default class Views {
  static errorView(err: unknown): void {
    if (err instanceof Error) {
      console.log(chalk.red(err.message));
    }
  }
}
