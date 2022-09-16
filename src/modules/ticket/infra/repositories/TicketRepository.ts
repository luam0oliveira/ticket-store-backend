import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { IDeleteTicketDTO } from "@modules/ticket/dtos/IDeleteTicketDTO";
import { IGetAllTicketsFromEventDTO } from "@modules/ticket/dtos/IGetAllTicketsFromEventDTO";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { Ticket } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

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
