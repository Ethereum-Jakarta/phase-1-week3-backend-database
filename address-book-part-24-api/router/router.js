const express = require("express");
const router = express.Router();
const contactController = require("../controller/controlerContact");
const groupController = require("../controller/controlerGroups");
const contactGroupController = require("../controller/controlerGroupContact");
const helpControler = require("../controller/controler");

router.get("/Contact",async(req,res)=>{
  //res.send(req.originalUrl);
  contactController.showContact(req.originalUrl,req,res)
})

router.post("/Contact",async(req,res)=>{
  // console.log(req.body);
  const body= req.body;
  contactController.createContact(body.nama,body.phoneNumber,body.company,body.email,req,res);

})

router.put("/Contact",async(req,res)=>{
  const body= req.body;
  contactController.updateContact(body.id,body.nama,body.phoneNumber,body.company,body.email,req,res);
})

router.delete("/Contact",async(req,res)=>{
  const body= req.body;
  contactController.deleteContact(body.id,req,res);
})

//group router
router.get("/Group",async(req,res)=>{
  groupController.showGroup(req.originalUrl,res);
})

router.post("/Group",async(req,res)=>{
  const body = req.body;
  groupController.createGroup(body.namaGroup,req,res);
})

router.put("/Group",async(req,res)=>{
  const body = req.body;
  groupController.updateGroup(
    body.id,
    body.namaGroup,
    req,
    res
  )
})

router.delete("/Group",async(req,res)=>{
  const body = req.body;
  groupController.deleteGroup(
    body.id,req,res
  )
})

//group contact router

router.get("/GroupContact",async(req,res)=>{
  const body = req.body;
  contactGroupController.showGroupContact(req.originalUrl,req,res);

})

router.post("/GroupContact",async(req,res)=>{
  const body = req.body;
  contactGroupController.createGroupContact(
    body.contactId,
    body.groupId,
    req,
    res
  );
})

router.put("/GroupContact",async(req,res)=>{
  const body = req.body;
  contactGroupController.updateGroupContact(
    body.id,
    body.contactId,
    body.groupId,
    req,
    res
  )
})

router.delete("/GroupContact",async(req,res)=>{
  const body = req.body;
  contactGroupController.deleteGroupContact(body.id,req,res);
})

module.exports = router;