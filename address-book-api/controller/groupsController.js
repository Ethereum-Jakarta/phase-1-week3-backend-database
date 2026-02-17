import { Groups } from '../model/groupsModel.js'

class GroupsController {
    static create = (req, res, next) => {
        Groups.create(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Add Group Success",
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
        Groups.update(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Update Group Success",
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
        Groups.delete(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Delete Group Success",
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
        Groups.show(req, res, next).then(
            response => {
                res.status(200).send({
                    status: 200,
                    message: "Get Group Success",
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

export { GroupsController }