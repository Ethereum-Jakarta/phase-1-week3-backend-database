const chalk = require('chalk');
const table = require('console.table');

class View {
    static successMessage(message) {
        console.log(chalk.green.bold("✔ " + message));
    }

    static errorMessage(message) {
        console.log(chalk.red.bold("✖ " + message));
    }

    static displayContacts(contacts) {
        if (contacts.length === 0) {
            console.log(chalk.yellow("No contacts found."));
        } else {
            console.log(chalk.blue.bold("Contacts List:"));
            console.table(contacts);
        }
    }

    static displayGroups(groups) {
        if (groups.length === 0) {
            console.log(chalk.yellow("No groups found."));
        } else {
            console.log(chalk.blue.bold("Groups List:"));
            console.table(groups);
        }
    }

    static displayGroupContacts(groupContacts) {
        if (groupContacts.length === 0) {
            console.log(chalk.yellow("No contacts in this group."));
        } else {
            console.log(chalk.blue.bold("Group Contacts List:"));
            console.table(groupContacts);
        }
    }

    static loadingMessage() {
        process.stdout.write(chalk.cyan("Loading... "));
        setTimeout(() => {
            process.stdout.write(chalk.green("Done!\n"));
        }, 1000);
    }
}

module.exports = View;