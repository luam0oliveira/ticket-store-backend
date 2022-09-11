import { Ticket } from "@prisma/client";

import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { IDeleteTicketDTO } from "../dtos/IDeleteTicketDTO";
import { IGetAllTicketsFromEventDTO } from "../dtos/IGetAllTicketsFromEventDTO";

interface ITicketRepository {
  create({ eventId, name, price, quantity }: ICreateTicketDTO): Promise<void>;
  getAllTicketsFromEvent(
    eventId: IGetAllTicketsFromEventDTO
  ): Promise<Ticket[]>;
  delete(ticketId: IDeleteTicketDTO): Promise<void>;
}

export { ITicketRepository };
