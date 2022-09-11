import { Ticket } from "@prisma/client";

import { prismaClient } from "../../../../prisma/client";
import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { IDeleteTicketDTO } from "../../dtos/IDeleteTicketDTO";
import { IGetAllTicketsFromEventDTO } from "../../dtos/IGetAllTicketsFromEventDTO";
import { ITicketRepository } from "../ITicketRepository";

class TicketRepository implements ITicketRepository {
  async create({
    name,
    eventId,
    price,
    quantity,
  }: ICreateTicketDTO): Promise<void> {
    await prismaClient.ticket.create({
      data: {
        name,
        price,
        quantity,
        eventId,
      },
    });
  }

  async getAllTicketsFromEvent({
    eventId,
  }: IGetAllTicketsFromEventDTO): Promise<Ticket[]> {
    return await prismaClient.ticket.findMany({ where: { eventId } });
  }

  async delete({ ticketId }: IDeleteTicketDTO): Promise<void> {
    await prismaClient.ticket.delete({ where: { id: ticketId } });
  }
}

export { TicketRepository };
