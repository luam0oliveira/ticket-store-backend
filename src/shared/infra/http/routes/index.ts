import { Router } from "express";

import { companyRoutes } from "./company.routes";
import { eventRoutes } from "./event.routes";
import { ticketRoutes } from "./ticket.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/companies", companyRoutes);
routes.use("/events", eventRoutes);
routes.use("/tickets", ticketRoutes);
routes.use("/users", userRoutes);

export { routes };
