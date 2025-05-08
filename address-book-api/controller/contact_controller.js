let Contact = require("../model/contact_model.js");

class ContactController{

    static show = async (req, res)=>{
        try {
            
            const result = await Contact.show();
            if(result.length>0){
                res.status(200).send({
                    status: 200,
                    message: "Get Contacts Success",
                    data: result,
                  });
            }else{
                res.status(404).send({
                    status: 404,
                    message: "Data not found",
                    data: result,
                  });
            }

        } catch (error) {
            console.error("Error fetching contacts:", error);
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error.message,
              });
        }
    }


    static create = async (req, res)=>{
        try {
            const body = req.body;
            await Contact.create(
                body.name,
                body.phoneNumber,
                body.company,
                body.email
            );
            res.status(200).json({
                status: 200,
                message: "succes create contact",
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
            await Contact.update(
                id,
                body.name,
                body.phoneNumber,
                body.company,
                body.email
            );
            res.status(200).json({
                status: 200,
                message: "succes update contact",
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
            await Contact.delete(
                id,   
            );
            res.status(200).json({
                status: 200,
                message: "succes delete contact",
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

module.exports = ContactController;