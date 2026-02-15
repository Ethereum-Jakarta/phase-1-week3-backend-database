import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class ContactGroupIDRouter extends Router {
  public override exec() {
    this.router
      .route("/contactGroup/:id")
      .put((req, res) => this.controllerPut(req, res))
  }

  private controllerPut(request: Request<{ id: string }>, response: Response) {
    try {
      const id = parseInt(request.params.id);
      if (isNaN(id)) throw Error("ID must be valid integer");
      const { contactId, groupId } = request.body;
      if (!contactId || !groupId) throw Error("Missing something!");
      this.db.schema("GroupContact").update(id, { contactId, groupId });
      response.status(200).json("ContactGroup Updated");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
