import { Router } from "express";

import getAllEventsController from "@modules/ticket/useCases/getAllEvents/GetAllEventsController";

const eventRoutes = Router();

eventRoutes.get("/:companyId", getAllEventsController.handle);

export { eventRoutes };
