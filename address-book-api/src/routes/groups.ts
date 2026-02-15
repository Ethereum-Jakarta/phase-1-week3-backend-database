import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class GroupsRouter extends Router {
  public override exec() {
    this.router
      .route("/groups")
      .get((req, res) => this.controllerGet(req, res))
      .post((req, res) => this.controllerPost(req, res));
  }

  private controllerGet(_: Request, response: Response) {
    try {
      response.status(200).json(this.db.schema("Groups").show());
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }

  private controllerPost(request: Request, response: Response) {
    try {
      const { groupName } = request.body;
      if (!groupName) throw Error("Missing something!");
      this.db.schema("Groups").create({ groupName });
      response.status(200).json("Group Setted");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
