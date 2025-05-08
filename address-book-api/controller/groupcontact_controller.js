let GroupContact = require("../model/groupcontact_model.js");

class GroupContactController{
    static create = async (req, res)=>{
        try {
            const body = req.body;
            await GroupContact.create(
                body.ContactId,
                body.GroupId
               
            );
            res.status(200).json({
                status: 200,
                message: "succes create groupcontact",
                data: body,
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
              });
        }
    }

    static update = async (req, res)=>{
        try {
            const id = req.params.id;
            const body = req.body;
            await GroupContact.update(
                id,
                body.ContactId,
                body.GroupId,
                
            );
            res.status(200).json({
                status: 200,
                message: "succes update groupcontact",
                data: body,
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
              });
        }
    }

    static delete = async (req, res)=>{
        try {
            const id = req.params.id;
            await GroupContact.delete(
                id,   
            );
            res.status(200).json({
                status: 200,
                message: "succes delete groupcontact",
                data: id,
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
              });
        }
    }
}

module.exports = GroupContactController;