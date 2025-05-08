const { create, update, deleteGroupContactById } = require("../models/group-contact-model");

async function createGroupContact(req, res) {
    const { contactId, groupId } = req.body;

    try {
        if (!contactId) return res.status(400).json({ error: 'contactId required' })
        if (!groupId) return res.status(400).json({ error: 'groupId required' })

        const responses = await create(contactId, groupId);
        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_CREATE_GROUP_CONTACT]", error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

async function updateGroupContact(req, res) {
    const { id, contactId, groupId } = req.body

    try {
        if (!id) return res.status(400).json({ error: 'id required' })
        if (!contactId) return res.status(400).json({ error: 'contactId required' })
        if (!groupId) return res.status(400).json({ error: 'groupId required' })

        const responses = await update({id, contactId, groupId});
        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_UPDATE_GROUP_CONTACT]", error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

async function deleteGroupContact(req, res) {
    const id = req.params.id;

    try {
        if (!id) return res.status(400).json({ error: 'id required' })
        
        const responses = await deleteGroupContactById(id);
        return res.status(200).json(responses);
    } catch (error) {
        console.log("[ERROR_DELETE_GROUP_CONTACT]", error.message);
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createGroupContact,
    updateGroupContact,
    deleteGroupContact
};
