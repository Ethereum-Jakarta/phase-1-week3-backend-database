import { Router } from "#address-book/lib/router";
import type { Request, Response } from "express";

export class GroupsIDRouter extends Router {
  public override exec() {
    this.router
      .route("/groups/:id")
      .put((req, res) => this.controllerPut(req, res))
      .delete((req, res) => this.controllerDelete(req, res));
  }

  private controllerDelete(request: Request<{ id: string }>, response: Response) {
    try {
      const id = parseInt(request.params.id);
      if (isNaN(id)) throw Error("ID must be valid integer");
      this.db.schema("Groups").delete(id)
      response.status(200).json("Groups Deleted!");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }

  private controllerPut(request: Request<{ id: string }>, response: Response) {
    try {
      const id = parseInt(request.params.id);
      if (isNaN(id)) throw Error("ID must be valid integer");
      const { groupName } = request.body;
      if (!groupName ) throw Error("Missing something!");
      this.db.schema("Groups").update(id, { groupName });
      response.status(200).json("Groups Updated");
    } catch (error) {
      response.status(400).json(`${(error as Error).message}`);
    }
  }
}
