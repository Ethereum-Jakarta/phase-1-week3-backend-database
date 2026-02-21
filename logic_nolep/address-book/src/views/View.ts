export class View {
    static renderContacts(data: any[]) {
        console.log('\n--- CONTACT LIST ---');
        const displayData = data.map(item => ({
            ...item,
            groups: item.groups[0] === null ? '-' : item.groups.join(', ')
        }));
        console.table(displayData);
    }

    static renderSuccess(message: string) {
        if (typeof message === 'object') {
            console.log(`SUCCESS: Data process completed`);
            console.table(message);
        } else {
            console.log(`SUCCESS: ${message}`);
        }
    }

    static renderError(err: any) {
        console.log(`ERROR: ${err.message}`);
    }

    static renderGroups(data: any[]) {
        console.log('\n--- GROUP LIST ---');
        const displayData = data.map(item => ({
            ...item,
            members: item.members[0] === null ? '-' : item.members.join(', ')
        }));
        console.table(displayData);
    }    
}