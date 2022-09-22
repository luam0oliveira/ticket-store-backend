import { inject, injectable } from "tsyringe";

import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { Ticket } from "@prisma/client";
import { AppError } from "@shared/error/AppError";

@injectable()
class CreateTicketUseCase {
  constructor(
    @inject("TicketRepository") private ticketRepository: ITicketRepository
  ) {
    //
  }
  async execute(ticketData: ICreateTicketDTO): Promise<Ticket> {
    const ticketExists = await this.ticketRepository.getTicketByName(
      ticketData.name,
      ticketData.eventId
    );

    if (ticketExists?.name) {
      throw new AppError(400, "Ticket already exists!");
    }

    const ticket = await this.ticketRepository.create(ticketData);
    return ticket;
  }
}

export { CreateTicketUseCase };
