const { update } = require("../../../address-book/model/groups");
const { get, create, deleteGroupsById } = require("../models/groups-model");

async function groups(req, res) {
    try {
        const responses = await get();

        return res.status(200).json(responses);
    } catch (error) {
        console.log("[ERROR_GROUPS]", error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
}

async function createGroups(req, res) {
    const { name } = req.body;

    try {
        if (!name) return res.status(400).json({ error: "name required" });

        const responses = await create(name);

        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_CREATE_GROUPS]", error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
}

async function updateGroups(req, res) {
    const { id, name } = req.body;

    try {
        if (!id) return res.status(400).json({ error: "id required" });
        if (!name) return res.status(400).json({ error: "name required" });

        const responses = await update(id, name);
        console.log({ responses });

        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_UPDATE_GROUPS]", error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
}

async function deleteGroups(req, res) {
    const id = req.params.id;

    try {
        if (!id) return res.status(400).json({ error: "id required" });

        const responses = await deleteGroupsById(id);

        res.status(200).json(responses);
    } catch (error) {
        console.log("[ERROR_DELETE_GROUPS]", error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
}

module.exports = {
    groups,
    createGroups,
    updateGroups,
    deleteGroups,
};
