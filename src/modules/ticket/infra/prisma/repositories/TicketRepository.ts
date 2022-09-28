import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { Ticket } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

class TicketRepository implements ITicketRepository {
  async getTicketById(id: number): Promise<Ticket | null | undefined> {
    const ticket = await prismaClient.ticket.findUnique({ where: { id } });
    return ticket;
  }
  async getTicketByName(
    name: string,
    eventId: number
  ): Promise<Ticket | null | undefined> {
    const ticket = await prismaClient.ticket.findUnique({
      where: { eventId_name: { eventId, name } },
    });
    return ticket;
  }
  async create({
    name,
    eventId,
    price,
    quantity,
  }: ICreateTicketDTO): Promise<Ticket> {
    return await prismaClient.ticket.create({
      data: {
        name,
        price,
        quantity,
        eventId,
      },
    });
  }

  async getAllTicketsFromEvent(eventId: number): Promise<Ticket[]> {
    return await prismaClient.ticket.findMany({ where: { eventId } });
  }

  async delete(ticketId: number): Promise<void> {
    await prismaClient.ticket.delete({ where: { id: ticketId } });
  }
}

export { TicketRepository };
