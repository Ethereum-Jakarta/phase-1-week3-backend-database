let Contact = require("../model/contact");

class ContactController {
    static deleteContact(req,res){
        let id = Number(req.params.id);
        // console.log(id)
        Contact.delete(id,(err,data)=>{
            if (err) {
                // console.log(err)
                res.status(500).json({
                    "error": err.message
                })
    
                return
            } else {
                // console.log(data)
                res.status(200).json({
                    message: "Success Deleting Contact"
                });
            }
        })
    }
    static updateContact(req,res){
        let body = req.body
        body = {id: Number(req.params.id), ...body};
        Contact.update(body.id, body.name, body.phoneNumber, body.company, body.email,(err,data)=>{
            if (err) {
                res.status(500).json({
                    "error": err.message
                })
    
                return
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Updating Contact"
                });
            }
        })
    }
    static createContact(req,res){
        
        const body = req.body
        // console.log(body)
            Contact.create(body.name, body.phoneNumber, body.company, body.email,(err,data)=>{
            if (err) {
                res.status(500).json({
                    "error": err.message
                })
    
                return
            } else {
                // console.log(data)
                res.status(200).json({
                    data: body,
                    message: "Success Creating Contact"
                });
            }
        })
    }
    static show(req,res){
        Contact.showContact((err,data)=>{
            // console.log(data)
            if (err) {
                res.status(500).json({
                    "error": err.message
                })
    
                return
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
          });

      }
    
    static help (){

        addressBookView.helpView();

    }
    // lanjutkan command yang lain
}


module.exports = ContactController;