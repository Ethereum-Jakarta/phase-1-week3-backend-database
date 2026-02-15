import type { DatabaseConnection } from "#address-book/lib/connection";
import type { Router as ExpressRouter } from "express";

export class Router {
  public constructor(public db: DatabaseConnection, public router: ExpressRouter) {
    this.exec();
  }

  public exec() {
    throw ReferenceError("must be overided");
  }
}
