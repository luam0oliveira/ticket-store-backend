import { config } from "dotenv";
import express from "express";

import { TicketRepository } from "./modules/ticket/repositories/Ticket";
config();

const app = express();

app.use(express.json());

const ticketRepository = new TicketRepository();

app.post("/ticket/create", async (request, response) => {
  const { name, price, quantity, eventId } = request.body;
  const ticket = await ticketRepository.create({
    name,
    price,
    quantity,
    eventId,
  });
  response.json(ticket);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}/`);
});
