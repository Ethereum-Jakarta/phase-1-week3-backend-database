const showContacts = (contacts) => {
    console.table(contacts);
};

const showGroups = (groups) => {
    console.table(groups);
};

module.exports = { showContacts, showGroups };
