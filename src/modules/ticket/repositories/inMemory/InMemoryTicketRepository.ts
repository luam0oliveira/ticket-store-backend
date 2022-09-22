import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { Ticket } from "@prisma/client";

import { ITicketRepository } from "../ITicketRepository";

class InMemoryTicketRepository implements ITicketRepository {
  tickets: Ticket[] = [];

  async getTicketById(id: number): Promise<Ticket | null | undefined> {
    return this.tickets.find((ticket) => ticket.id === id);
  }
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
  async getAllTicketsFromEvent(eventId: number): Promise<Ticket[]> {
    const tickets = this.tickets.filter((ticket) => ticket.eventId === eventId);
    return tickets;
  }

  async delete(ticketId: number): Promise<void> {
    const eventIndex = this.tickets.findIndex(
      (ticket) => ticket.id === ticketId
    );
    this.tickets = [
      ...this.tickets.slice(0, eventIndex - 1),
      ...this.tickets.slice(eventIndex + 1),
    ];
  }
}

export { InMemoryTicketRepository };
