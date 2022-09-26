import { inject, injectable } from "tsyringe";

import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";

@injectable()
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
