import { Router } from "express";

import createTicketController from "@modules/ticket/useCases/createTicket/CreateTicketController";
import getAllTicketsController from "@modules/ticket/useCases/getAllTickets/GetAllTicketsController";

const ticketRoutes = Router();

ticketRoutes.get("/:eventId", getAllTicketsController.handle);
ticketRoutes.post("/", createTicketController.handle);

export { ticketRoutes };
