import { inject, injectable } from "tsyringe";

import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { AppError } from "@shared/error/AppError";

@injectable()
class DeleteTicketUseCase {
  constructor(
    @inject("TicketRepository") private ticketRepository: ITicketRepository
  ) {
    //
  }
  async execute(id: number) {
    const ticketExists = await this.ticketRepository.getTicketById(id);

    if (!ticketExists?.name) {
      throw new AppError(404, "Ticket not exists!");
    }

    await this.ticketRepository.delete(id);

    return true;
  }
}

export { DeleteTicketUseCase };
