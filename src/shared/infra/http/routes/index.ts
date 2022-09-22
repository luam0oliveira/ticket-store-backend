import { Router } from "express";

import { companyRoutes } from "./company.routes";
import { eventRoutes } from "./event.routes";

const routes = Router();

routes.use("/companies", companyRoutes);
routes.use("/events", eventRoutes);

export { routes };
