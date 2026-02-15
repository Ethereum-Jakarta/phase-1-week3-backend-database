import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class ContactIDRouter extends Router {
  public override exec() {
    this.router
      .route("/contact/:id")
      .put((req, res) => this.controllerPut(req, res))
      .delete((req, res) => this.controllerDelete(req, res));
  }

  private controllerDelete(request: Request<{ id: string }>, response: Response) {
    try {
      const id = parseInt(request.params.id);
      if (isNaN(id)) throw Error("ID must be valid integer");
      this.db.schema("Contact").delete(id)
      response.status(200).json("Contact Deleted!");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }

  private controllerPut(request: Request<{ id: string }>, response: Response) {
    try {
      const id = parseInt(request.params.id);
      if (isNaN(id)) throw Error("ID must be valid integer");
      const { name, email, phoneNumber, company } = request.body;
      if (!name || !email || !phoneNumber || !company) throw Error("Missing something!");
      this.db.schema("Contact").update(id, { name, email, phoneNumber, company });
      response.status(200).json("Contact Updated");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
