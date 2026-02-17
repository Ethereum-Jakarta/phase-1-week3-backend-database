import { Contact } from '../model/contactModel.js'

class ContactController {
    static create = (req, res, next) => {
        Contact.create(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Add Contacts Success",
                });
            }
        ).catch(
            error => {
                res.status(500).send({
                    status: 500,
                    message: "Internal Server Error",
                    error: error.message,
                });
            }
        )
    }

    static update = (req, res, next) => {
        Contact.update(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Update Contacts Success",
                });
            }
        ).catch(
            error => {
                res.status(500).send({
                    status: 500,
                    message: "Internal Server Error",
                    error: error.message,
                });
            }
        )
    }

    static delete = (req, res, next) => {
        Contact.delete(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Delete Contacts Success",
                });
            }
        ).catch(
            error => {
                res.status(500).send({
                    status: 500,
                    message: "Internal Server Error",
                    error: error.message,
                });
            }
        )
    }

    static show = (req, res, next) => {
        Contact.show(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Get Contacts Success",
                    data: response
                });
            }
        ).catch(
            error => {
                res.status(500).send({
                    status: 500,
                    message: "Internal Server Error",
                    error: error.message,
                });
            }
        )
    }
}

export { ContactController }