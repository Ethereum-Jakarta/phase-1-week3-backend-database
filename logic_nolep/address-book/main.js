const readline = require('readline');
const ContactController = require('./controllers/contactController');
const GroupController = require('./controllers/groupController');
const ContactGroupController = require('./controllers/contactGroupController');
const view = require('./views/view');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayCommandList = () => {
    console.log(`
====================
ADDRESS BOOK COMMAND
====================
1. Create Contact
2. Update Contact
3. Delete Contact
4. Show Contacts
5. Create Group
6. Update Group
7. Delete Group
8. Show Groups
9. Create Contact Group
10. Update Contact Group
11. Delete Contact Group
0. Exit
====================
`);
};

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    displayCommandList();
    const command = await askQuestion('Select a command (0 to exit): ');

    switch (command) {
        case '1':             const name = await askQuestion('Enter name: ');
            const phoneNumber = await askQuestion('Enter phone number: ');
            const company = await askQuestion('Enter company: ');
            const email = await askQuestion('Enter email: ');
            await ContactController.create(name, phoneNumber, company, email);
            main();
            break;
        case '2':             const updateId = await askQuestion('Enter contact ID to update: ');
            const updateName = await askQuestion('Enter new name: ');
            const updatePhoneNumber = await askQuestion('Enter new phone number: ');
            const updateCompany = await askQuestion('Enter new company: ');
            const updateEmail = await askQuestion('Enter new email: ');
            await ContactController.update(updateId, updateName, updatePhoneNumber, updateCompany, updateEmail);
            main();
            break;
            case '3':             const deleteId = await askQuestion('Enter contact ID to delete: ');
            const confirmDelete = await askConfirmation(`Are you sure you want to delete contact with ID ${deleteId}? (yes/no) `);
            if (confirmDelete) {
                await ContactController.delete(deleteId);
            } else {
                                await ContactController.delete(deleteId);
                view.successMessage("Contact deleted successfully!");
            }
            main();
            break;
        case '4':             view.loadingMessage();
            await ContactController.show();
            main();
            break;
        case '5':             const groupName = await askQuestion('Enter group name: ');
            await GroupController.create(groupName);
            main();
            break;
        case '6':             const groupId = await askQuestion('Enter group ID to update: ');
            const newGroupName = await askQuestion('Enter new group name: ');
            await GroupController.update(groupId, newGroupName);
            main();
            break;
        case '7':             const deleteGroupId = await askQuestion('Enter group ID to delete: ');
            const confirmDeleteGroup = await askConfirmation(`Are you sure you want to delete group with ID ${deleteGroupId}? (yes/no) `);
            if (confirmDeleteGroup) {
                await GroupController.delete(deleteGroupId);
            } else {
                await GroupController.delete(deleteId);
                view.successMessage("Contact deleted successfully!");
            }
            main();
            break;
        case '8':             view.loadingMessage();
            await GroupController.show();
            main();
            break;
        case '9':             const contactId = await askQuestion('Enter contact ID: ');
            const groupIdToAdd = await askQuestion('Enter group ID: ');
            await ContactGroupController.create(contactId, groupIdToAdd);
            main();
            break;
        case '10':             const contactGroupId = await askQuestion('Enter contact group ID to update: ');
            const newContactId = await askQuestion('Enter new contact ID: ');
            const newGroupId = await askQuestion('Enter new group ID: ');
            await ContactGroupController.update(contactGroupId, newContactId, newGroupId);
            main();
            break;
        case '11':             const deleteContactGroupId = await askQuestion('Enter contact group ID to delete: ');
            const confirmDeleteContactGroup = await askConfirmation(`Are you sure you want to delete contact group with ID ${deleteContactGroupId}? (yes/no) `);
            if (confirmDeleteContactGroup) {
                await ContactGroupController.delete(deleteContactGroupId);
            } else {
                view.errorMessage("Deletion cancelled.");
            }
            main();
            break;

        case '0':             console.log("Exiting the application. Goodbye!");
            rl.close();
            return;
        default:
            console.log('Unknown command. Please select a valid option.');
            main();
    }
};

const askConfirmation = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.toLowerCase() === 'yes');
        });
    });
};

main();