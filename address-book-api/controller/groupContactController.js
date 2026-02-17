import { GroupContact } from '../model/groupContactModel.js'

class GroupContactController {
    static create = (req, res, next) => {
        GroupContact.create(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Add Group Contact Success",
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
        GroupContact.update(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Update Group Contact Success",
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
        GroupContact.delete(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Delete Group Contact Success",
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
        GroupContact.show(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Get Group Contact Success",
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

export { GroupContactController }