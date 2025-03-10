const GroupContact = require("../models/groupContact");

const createContactGroup = (contactId, groupId) => {
    return GroupContact.create(contactId, groupId);
};

const deleteContactGroup = (id) => {
    return GroupContact.delete(id);
};

module.exports = { createContactGroup, deleteContactGroup };
