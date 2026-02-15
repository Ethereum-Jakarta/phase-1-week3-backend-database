import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class ContactGroupRouter extends Router {
  public override exec() {
    this.router
      .route("/contactGroup")
      .get((req, res) => res.status(200).json("woy"))
      .post((req, res) => this.controllerPost(req, res));
  }

  private controllerPost(request: Request, response: Response) {
    try {
      const { groupId, contactId } = request.body;
      if (!groupId || !contactId) throw Error("Missing something!");
      this.db.schema("GroupContact").create({ groupId, contactId });
      response.status(200).json("ContactGroup Setted");
    } catch (error) {
      console.error(error)
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
