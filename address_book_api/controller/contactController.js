const ContactModel = require('../model/contact');

class ContactController {
	static getContacts = async (req, res) => {
		try {
			const data = await ContactModel.show()
			res.status(200).send({
				status: 200,
				message: "data ok",
				data: JSON.parse(data)
			})
		} catch(e) {
			res.status(404).send({
				status: 404,
				message: "Data not found",
				data: e.message
			})
		}
	}
	

	static createContact = async (req, res) => {
		try {
			const body = req.body
			const data = await ContactModel.create(body.name, body.phoneNumber, body.company, body.email)
			res.status(200).send({
				status: 200,
				message: "Data ditambahkan di tabel Contact",
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

	static updateContact = async (req, res) => {
		try {
			const body = req.body;
			const update = await ContactModel.update(req.params.id, body.name, body.phoneNumber, body.company, body.email)
			res.status(200).send({
				status: 200,
				message: "Table updated",
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

	static deleteContact = async (req, res) => {
		try {
			const data = await ContactModel.delete(req.params.id)
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

module.exports = ContactController;