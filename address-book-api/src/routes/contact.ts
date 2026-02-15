import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class ContactRouter extends Router {
  public override exec() {
    this.router
      .route("/contact")
      .get((req, res) => this.controllerGet(req, res))
      .post((req, res) => this.controllerPost(req, res));
  }

  private controllerGet(_: Request, response: Response) {
    try {
      response.status(200).json(this.db.schema("Contact").show());
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }

  private controllerPost(request: Request, response: Response) {
    try {
      const { name, email, phoneNumber, company } = request.body;
      if (!name || !email || !phoneNumber || !company) throw Error("Missing something!");
      this.db.schema("Contact").create({ name, email, phoneNumber, company });
      response.status(200).json("Contact Setted");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
