let Group = require("../model/group");

class GroupController {
    static deleteGroups(req,res){
        let id = Number(req.params.id);
        Group.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                res.status(500).json({
                    "error": err.message
                })
            } else {
                // console.log(data)
                res.status(200).json({
                    message: "Success Deleting Group"
                });
            }
        })
    }
    static updateGroups(req,res){
        let body = req.body
        body = {id: Number(req.params.id), ...body};
        Group.update(body.id,body.groupName,(err,data)=>{
            if (err) {
                console.log(err)
                res.status(500).json({
                    "error": err.message
                })
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Updating Groups"
                });
            }
        })
    }
    static createGroups(req,res){
        const body = req.body
        Group.create(body.groupName,(err,data)=>{
            if (err) {
                res.status(500).json({
                    "error": err.message
                })
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Creating Groups"
                });
            }
        })
    }
    static getGroups(req,res){
        Group.show((data,err)=>{
            if (err) {
                res.status(500).json({
                    "error": err.message
                })
            } else {
                if (data.length) {
                    res.status(200).send({
                      status: 200,
                      message: "Get Contacts Success",
                      data: data,
                    });
                  } else {
                    res.status(404).send({
                      status: 404,
                      message: "Data not found",
                      data: data,
                    });
                  }
            }
        })
    }
    static help (){

        addressBookView.helpView();

    }
    // lanjutkan command yang lain
}


module.exports = GroupController;