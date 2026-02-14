import express from "express";
import { api_router } from "../routes/api.route";
import { static_router } from "../routes/public.route";
import { errorHandler } from "../middlewares/errorHandler";

export const web = express();

web.use(express.json());
web.use(static_router);
web.use(api_router);
web.use(errorHandler);
