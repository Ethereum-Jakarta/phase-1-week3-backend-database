import express from "express";

import { DatabaseConnection } from "#address-book/lib/connection";

//Router
import { ContactRouter } from "#address-book/routes/contact";
import { ContactIDRouter } from "#address-book/routes/contact+id";
import { GroupsRouter } from "#address-book/routes/groups";
import { GroupsIDRouter } from "#address-book/routes/groups+id";
import { ContactGroupRouter } from "#address-book/routes/contactGroup";
import { ContactGroupIDRouter } from "#address-book/routes/contactGroup+id";

export class App {
  public app = express();
  public port = 8080;
  public router = express.Router();

  public db = new DatabaseConnection();

  public constructor() {
    this.registerRouter();
    this.app
      .use(express.json())
      .use(this.router)
      .listen(this.port, () => console.log("Listening on port", this.port));
  }

  private registerRouter() {
    this.router.route("/").all((_, res) => res.json("Helo Babe!"));

    new ContactRouter(this.db, this.router);
    new ContactIDRouter(this.db, this.router);
    new GroupsRouter(this.db, this.router);
    new GroupsIDRouter(this.db, this.router);
    new ContactGroupRouter(this.db, this.router);
    new ContactGroupIDRouter(this.db, this.router);
  }
}
