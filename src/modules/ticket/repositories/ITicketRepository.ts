import { Ticket } from "@prisma/client";

import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";

interface ITicketRepository {
  create({ eventId, name, price, quantity }: ICreateTicketDTO): Promise<void>;
  getAllTicketsFromEvent(eventId: number): Promise<Ticket[]>;
  delete(ticketId: number): Promise<void>;
}

export { ITicketRepository };
