const {
    get,
    create,
    update,
    deleteContactById,
} = require("../models/contact-model");

async function contact(req, res) {
    try {
        const result = await get();

        res.status(200).json(result);
    } catch (error) {
        console.log("[ERROR_CONTACT]", error.message);
        res.status(500).json({ error: "An error occurred on the server" });
    }
}

async function createContact(req, res) {
    const { name, phoneNumber, company, email } = req.body;

    try {
        if (!name) return res.status(400).json({ error: "name required" });
        if (!phoneNumber)
            return res.status(400).json({ error: "phoneNumber required" });
        if (!company)
            return res.status(400).json({ error: "company required" });
        if (!email) return res.status(400).json({ error: "email required" });

        const responses = await create({
            name,
            phoneNumber,
            company,
            email,
        });

        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_CREATE_CONTACT]", error.message);
        return res.status(500).json({ error: error.message });
    }
}

async function updateContact(req, res) {
    const { id, name, phoneNumber, company, email } = req.body;

    try {
        if (!id) return res.status(400).json({ error: "id required" });
        if (!name) return res.status(400).json({ error: "name required" });
        if (!phoneNumber)
            return res.status(400).json({ error: "phoneNumber required" });
        if (!company)
            return res.status(400).json({ error: "company required" });
        if (!email) return res.status(400).json({ error: "email required" });

        const responses = await update({
            id,
            name,
            phoneNumber,
            company,
            email,
        });

        console.log({ responses });

        return res.status(201).json(responses);
    } catch (error) {
        console.log("[ERROR_UPDATE_CONTACT]", error.message);
        return res.status(500).json({ error: error.message });
    }
}

async function deleteContact(req, res) {
    const id = req.params.id;

    try {
        const responses = await deleteContactById(id);

        return res.status(200).json(responses);
    } catch (error) {
        console.log("[ERROR_DELETE_CONTACT]", error.message);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    contact,
    createContact,
    updateContact,
    deleteContact,
};
