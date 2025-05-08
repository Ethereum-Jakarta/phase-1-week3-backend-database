let GroupContact = require("../model/contactGroup");

class GroupContactController {
    static deleteContactGroup(req,res){
        let id = Number(req.params.id);
        GroupContact.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                            res.status(500).json({
                "error": err.message
            })

            return
            } else {
                // console.log(data)
                res.status(200).json({
                    message: "Success Deleting contactGroup"
                });
            }
        })
    }
    static updateContactGroup(req,res){
        let body = req.body
        body = {id: Number(req.params.id), ...body};
        GroupContact.update(body.id,body.contact,body.group,(err,data)=>{
            if (err) {
                console.log(err)
                            res.status(500).json({
                "error": err.message
            })

            return
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Updating contactGroup"
                });
            }
        })
    }
    static createContactGroup(req,res){
        const body = req.body
        GroupContact.create(body.contact,body.group,(err,data)=>{
            if (err) {
                            res.status(500).json({
                "error": err.message
            })

            return
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Creating contactGroup"
                });
            }
        })
    }
    static show(){
        GroupContact.show((data,err)=>{
            if (err) {
                            res.status(500).json({
                "error": err.message
            })

            return
            } else {
                addressBookView.contactView(data);
            }
        })
    }
    static help (){

        addressBookView.helpView();

    }
    // lanjutkan command yang lain
}


module.exports = GroupContactController;