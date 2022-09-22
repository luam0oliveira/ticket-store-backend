import { inject } from "tsyringe";

import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";

class GetAllTicketsUseCase {
  constructor(
    @inject("TicketRepository") private ticketRepository: ITicketRepository
  ) {
    //
  }
  async execute(eventId: number) {
    const tickets = await this.ticketRepository.getAllTicketsFromEvent(eventId);
    return tickets;
  }
}

export { GetAllTicketsUseCase };
