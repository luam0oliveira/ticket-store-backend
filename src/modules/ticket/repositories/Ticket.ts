import { prismaClient } from "../../../prisma/client";
import { ITicketRepositoryCreate } from "./ITicket";

export class TicketRepository {
  async create({
    name,
    eventId,
    price,
    quantity,
    event,
  }: ITicketRepositoryCreate) {
    const ticket = await prismaClient.ticket.create({
      data: {
        name,
        price,
        quantity,
        eventId,
        event,
      },
    });
    return ticket;
  }
}
