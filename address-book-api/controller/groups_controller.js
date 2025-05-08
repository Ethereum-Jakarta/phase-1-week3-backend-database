let Groups = require("../model/groups_model.js");

class GroupsController{

    static show = async (req, res)=>{
        try {
            
            const result = await Groups.show();
            if(result.length>0){
                res.status(200).send({
                    status: 200,
                    message: "Get Groups Success",
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
            console.error("Error fetching Groups:", error);
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
            await Groups.create(
                body.groupName,
               
            );
            res.status(200).json({
                status: 200,
                message: "succes create groups",
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
            await Groups.update(
                id,
                body.groupName,
                
            );
            res.status(200).json({
                status: 200,
                message: "succes update groups",
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
            await Groups.delete(
                id,   
            );
            res.status(200).json({
                status: 200,
                message: "succes delete groups",
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

module.exports = GroupsController;