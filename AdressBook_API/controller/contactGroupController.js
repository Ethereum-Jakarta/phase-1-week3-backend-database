const ModelGroupsContact = require("../model/groupsContact");

const getGroupsContact = async (req, res) => {
    try {
        const result = await ModelGroupsContact.getGroupsContact();
        res.status(200).send({
          status: 200,
          message: "Get GroupsContact Success",
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

const createGroupsContact = async (req, res) => {
    try{
        const body = req.body;
        if(!body.contactId){res.status(400).json({status: 400, message: "Need to input contactId",error:err.message})}
        if(!body.groupId){res.status(400).json({status: 400, message: "Need to input groupId",error:err.message})}
        const result = await ModelGroupsContact.createGroupsContact(body.contactId, body.groupId);
        res.status(200).json({
            status: 200,
            message: "Succesc Create GroupsContact",
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

const updateGroupsContact = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
        if(!body.contactId){res.status(400).json({status: 400, message: "Need to input contactId",error:err.message})}
        if(!body.groupId){res.status(400).json({status: 400, message: "Need to input groupId",error:err.message})}
        const result = await ModelGroupsContact.updateGroupsContact(
          id,
            body.contactId,
            body.groupId
        );

        res.status(200).json({
            status: 200,
            message: "Success Update Groups",
            data: body,
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

const deleteGroupsContact = async (req, res) => {
    try {
      const id = req.params.id;
      if(!id){res.status(400).json({status: 400, message: "Need to input id",error:err.message})}
      const result = await ModelGroupsContact.deleteGroupsContact(id);
  
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

  module.exports = {createGroupsContact, deleteGroupsContact, getGroupsContact, updateGroupsContact}

