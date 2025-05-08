const GroupsModel = require('../model/groups')

class GroupsController {
	static getGroups = async (req, res) => {
		try {
			const data = await GroupsModel.show();
			res.status(200).send({
				status: 200,
				message: "data ok",
				data: JSON.parse(data)
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				errMsg: e.message
			})
		}
	}

	static createGroups = async (req, res) => {
		try {
			const data = await GroupsModel.create(req.body.groupName)
			res.status(200).send({
				status: 200,
				message: "Data Created",
				data: req.body
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				errMsg: e.message
			})
		}
	}

	static updateGroups = async (req, res) => {
		try {
			const update = await GroupsModel.update(req.params.id, req.body.groupName)
			res.status(200).send({
				status: 200,
				message: "Data updated",
				data: req.body
			})	
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				errMsg: e.message
			})
		}
	}

	static deleteGroups = async (req, res) => {
		try {
			const deleted = await GroupsModel.delete(req.params.id)
			res.status(200).send({
				status: 200,
				message: "Data deleted",
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				errMsg: e.message
			})
		}
	}
}

module.exports = GroupsController