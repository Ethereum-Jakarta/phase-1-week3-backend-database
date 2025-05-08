const ModelGroups = require("../model/groups");

const getGroups = async (req, res) => {
    try {
        const result = await ModelGroups.getGroups();
        res.status(200).send({
          status: 200,
          message: "Get Groups Success",
          data: result,
        });
      } catch (error) {
        res.status(500).send({
          status: 500,
          message: "Internal Server Error",
          error: error.message,
        });
      }
}

const createGroups = async (req, res) => {
    try{
        const body = req.body;
        if(!body.groupName){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
        const result = await ModelGroups.createGroups(body.groupName);
        res.status(200).json({
            status: 200,
            message: "Succesc Create Groups",
            data: body,
          });
    }
    catch (error) {
        res.status(500).send({
          status: 500,
          message: "Internal Server Error",
          error: error.message,
        });
      }
}

const updateGroups = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
        if(!body.groupName){res.status(400).json({status: 400, message: "Need to input GroupName",error:err.message})}
        const result = await ModelGroups.updateGroups(
          id,
            body.groupName
        );

        res.status(200).json({
            status: 200,
            message: "Success Update Groups",
            data: body
          });
    }
    catch{
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: err.message,
          });
    }
}

const deleteGroups = async (req, res) => {
    try {
      const id = req.params.id;
      if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
      const result = await ModelGroups.deleteGroups(id);
  
      res.status(200).json({
        status: 200,
        message: "Success delete Groups",
        data: id,
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };

  module.exports = {createGroups, deleteGroups, getGroups, updateGroups}

