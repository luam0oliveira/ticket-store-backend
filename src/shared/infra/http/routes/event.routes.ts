import { Router } from "express";

import createEventController from "@modules/ticket/useCases/createEvent/CreateEventController";
import deleteEventController from "@modules/ticket/useCases/deleteEvent/DeleteEventController";
import getAllEventsController from "@modules/ticket/useCases/getAllEvents/GetAllEventsController";
import getEventByNameController from "@modules/ticket/useCases/getEventByName/GetEventByNameController";

const eventRoutes = Router();

eventRoutes.get("/:companyId", getAllEventsController.handle);
eventRoutes.get("/name/:eventName", getEventByNameController.handle);
eventRoutes.post("/", createEventController.handle);
eventRoutes.delete("/:id", deleteEventController.handle);

export { eventRoutes };
