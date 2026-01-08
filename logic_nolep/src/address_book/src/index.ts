import process from "node:process";

const command: string | undefined = process.argv[2];
// const argument: string[] = process.argv.slice(3);

switch (command) {
  case "createContact":
  case "updateContact":
  case "deleteContact":
  case "showContact":
  default:
}
