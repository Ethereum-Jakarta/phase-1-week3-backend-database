const Group = require("../models/group");

const createGroup = (groupName) => {
    return Group.create(groupName);
};

const showGroups = () => {
    return Group.show();
};

const updateGroup = (id, groupName) => {
    return Group.update(id, groupName);
};

const deleteGroup = (id) => {
    return Group.delete(id);
};

module.exports = { createGroup, showGroups, updateGroup, deleteGroup };
