const ContactGroupModel = require('../model/contactGroup')

class ContactGroupController {
	static createContactGroup = async (req, res) => {
		try {
			const data = await ContactGroupModel.create(req.body.contactId, req.body.groupId)
			res.status(200).send({
				status: 200,
				message: "Data Succesfully Insert",
				data: req.body
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				data: e.message
			})
		}
	}

	static updateContactGroup = async (req, res) => {
		try {
			const data = await ContactGroupModel.update(req.params.id, req.body.contactId, req.body.groupId)
			res.status(200).send({
				status: 200,
				message: "Data Succesfully Updated",
				data: req.body
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				data: e.message
			})
		}
	}

	static deleteContactGroup = async (req, res) => {
		try {
			const data = await ContactGroupModel.delete(req.params.id)
			res.status(200).send({
				status: 200,
				message: "Data Succesfully Deleted",
				data: req.body
			})
		} catch(e) {
			res.status(500).send({
				status: 500,
				message: "Internal Server Error",
				data: e.message
			})
		}
	}
}

module.exports = ContactGroupController