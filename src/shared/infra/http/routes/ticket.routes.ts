import { Router } from "express";

import createTicketController from "@modules/ticket/useCases/createTicket/CreateTicketController";
import deleteTicketController from "@modules/ticket/useCases/deleteTicket/DeleteTicketController";
import getAllTicketsController from "@modules/ticket/useCases/getAllTickets/GetAllTicketsController";

import { ensureAuthentication } from "../middlewares/ensureAuthenticate";

const ticketRoutes = Router();

ticketRoutes.get(
  "/:ticketId",
  ensureAuthentication,
  getAllTicketsController.handle
);
ticketRoutes.post("/", createTicketController.handle);
ticketRoutes.delete("/:ticketId", deleteTicketController.handle);

export { ticketRoutes };
