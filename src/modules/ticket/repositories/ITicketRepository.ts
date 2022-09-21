import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { Ticket } from "@prisma/client";

interface ITicketRepository {
  create({ eventId, name, price, quantity }: ICreateTicketDTO): Promise<Ticket>;
  getAllTicketsFromEvent(eventId: number): Promise<Ticket[]>;
  delete(ticketId: number): Promise<void>;
  getTicketByName(
    name: string,
    eventId: number
  ): Promise<Ticket | undefined | null>;
}

export { ITicketRepository };
