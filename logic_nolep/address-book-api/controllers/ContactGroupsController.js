const ContactGroups = require("../models/contactGroups")

class ContactGroupsController{
    static async create(req, res) {
        const {IDContact, IDGroup} = req.body
        try {
            await ContactGroups.create(IDContact, IDGroup);
            res.status(200).json({
                message: "Contact Group created successfully",
                data: {IDContact, IDGroup}
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to create Contact Group"
            })
        }
    }

    static async update(req, res) {
        const {id} = req.params;
        const {IDContact, IDGroup} = req.body;

        try {
            await ContactGroups.update(id, IDContact, IDGroup);
            res.status(200).json({
                message: "Contact Group updated successfully",
                data: {
                    IDContact,
                    IDGroup
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to updated Contact Group"
            })
        }
    }

    static async delete(req, res) {
        const {id} = req.params;
        try {
            await ContactGroups.delete(id)
            res.status(200).json({
                message : `Contact Group ${id} deleted successfully`
            })
        } catch (error) {
            res.status(500).json({
                message: `Failed to deleted ${id} Contact Group`
            })
        }
    }

    static async get(req, res) {
        const {id} = req.params;
        try {
            const contactGroup = await(ContactGroups.get(id))

            if (!contactGroup) {
                return res.status(404).json({
                    message: `${id} not found!`
                })
            }

            return res.status(200).json({
                message: `Data Contact Group ${id}`,
                contactGroup
            })
        } catch (error) {
            res.status(500).json({
                message: `Failed to get data Contact Group ${id}`
            })
        }
    }

    static async show(req, res) {
        try {
            const results = await(ContactGroups.show())
            res.status(200).json({
                message: "Get Data Contact Groups successfully",
                results
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to get data Contact Group"
            })
        }
    }

}

module.exports = ContactGroupsController