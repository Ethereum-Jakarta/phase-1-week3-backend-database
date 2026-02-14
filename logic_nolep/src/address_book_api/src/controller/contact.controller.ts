import { ContactService } from "../services/contact.services";
import type { Request, Response, NextFunction } from "express";

export class ContactController {
  public static async createContactHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const contact = await ContactService.createContact(req.body);
      res.status(201).json({
        sucess: true,
        message: "Berhasil membuat kontak baru",
        data: contact,
      });
    } catch (e) {
      next(e);
    }
  }
  public static async updateContactHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const contact = await ContactService.updateContact(
        Number(req.params.contactId),
        req.body,
      );
      res.status(201).json({
        sucess: true,
        message: "Berhasil melekukan update kontak",
        data: contact,
      });
    } catch (e) {
      next(e);
    }
  }
  public static async deleteContactHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      await ContactService.deleteContact(Number(req.params.contactId));
      res.status(200).json({
        sucess: true,
        message: "Berhasil menghapus kontak",
      });
    } catch (e) {
      next(e);
    }
  }
  public static async showContactHandler(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const contacts = await ContactService.showContacts();
      res.status(200).json({
        sucess: true,
        data: contacts,
      });
    } catch (e) {
      next(e);
    }
  }
}

/*
{ 
"name": "sarah",
"phone_number": "08963552765375",
"company": "MIRACLE AIRBOND",
"email" : "sarahsehat@mail.com"
}
*/
