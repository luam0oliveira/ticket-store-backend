import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { Ticket } from "@prisma/client";

interface ITicketRepository {
  create({ eventId, name, price, quantity }: ICreateTicketDTO): Promise<void>;
  getAllTicketsFromEvent(eventId: number): Promise<Ticket[]>;
  delete(ticketId: number): Promise<void>;
}

export { ITicketRepository };
