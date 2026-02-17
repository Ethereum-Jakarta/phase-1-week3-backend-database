import express from "express";
import { ContactController } from '../controller/contactController.js'
import { GroupsController } from '../controller/groupsController.js'
import { GroupContactController } from '../controller/groupContactController.js'

const router = express.Router()

router.post("/contact", ContactController.create)
router.put("/contact", ContactController.update)
router.delete("/contact/:id", ContactController.delete)
router.get("/contact", ContactController.show)

router.post("/groups", GroupsController.create)
router.put("/groups", GroupsController.update)
router.delete("/groups/:id", GroupsController.delete)
router.get("/groups", GroupsController.show)

router.post("/groupContact", GroupContactController.create)
router.put("/groupContact", GroupContactController.update)
router.delete("/groupContact/:id", GroupContactController.delete)
router.get("/groupContact", GroupContactController.show)

router.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello World!"
    })
})

export { router }