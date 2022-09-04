import { Router } from "express";

import { eventRoutes } from "./event.routes";

const routes = Router();

routes.use("/event", eventRoutes);

export { routes };
