import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { Ticket } from "@prisma/client";

import { ITicketRepository } from "../ITicketRepository";

class InMemoryTicketRepository implements ITicketRepository {
  tickets: Ticket[] = [];

  async getTicketByName(
    name: string,
    eventId: number
  ): Promise<Ticket | null | undefined> {
    const ticket = this.tickets.find(
      (ticket) => ticket.name === name && ticket.eventId === eventId
    );

    return ticket;
  }

  async create(ticket: ICreateTicketDTO): Promise<Ticket> {
    const id = this.tickets.length + 1;
    const ticketObject: Ticket = {
      ...ticket,
      id,
    };
    this.tickets.push(ticketObject);

    return ticketObject;
  }
  getAllTicketsFromEvent(eventId: number): Promise<Ticket[]> {
    throw new Error("Method not implemented.");
  }
  delete(ticketId: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { InMemoryTicketRepository };
