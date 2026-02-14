const Groups = require("../models/groups")

class GroupsController{
    static async create(req, res) {
        const {groupName} = req.body;
        try {
            await Groups.create(groupName);
            res.status(200).json({
                message: "Group created successfully",
                data: groupName
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to created group"
            })
        }
    }

    static async update(req, res) {
        const {id} = req.params;
        const {groupName} = req.body;
        try {
            await Groups.update(id, groupName);
            res.status(200).json({
                message: "Group updated successfully",
                groupName
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to update Group"
            })
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await Groups.delete(id)
            res.status(200).json({
                message: "Group deleted successfully"
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to deleted Group"
            })
        }
    }

    static async get(req, res) {
        const {id} = req.params;
        try {
            const contact = await(Groups.get(id))

            if (!contact) {
                res.status(404).json({
                    message: `${id} group not found!`
                })
            }

            res.status(200).json({
                message: `Data Group ${id}`,
                contact
            })
            
        } catch (error) {
            res.status(500).json({
                message: `Failed to get data Group ${id}`
            })
        }
    }

    static async show(req, res) {
        try {
            const results = await(Groups.show())
            res.status(200).json({
                message: "Get Data Group succesfully",
                results
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed to show Group"
            })
        }
    }

    // static async allGroups() {
    //     try {
    //         const results = await(Groups.allGroups())
    //         GroupsView.allGroupSuccess(results);
    //     } catch (error) {
    //         GroupsView.showError()
    //     }
    // }

}

module.exports = GroupsController