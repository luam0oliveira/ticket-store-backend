import { inject, injectable } from "tsyringe";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class CreateTicketUseCase {
  constructor(
    @inject("TicketRepository")
    private ticketRepository: ITicketRepository
  ) {
    //
  }

  async execute({ eventId, name, price, quantity }: ICreateTicketDTO) {
    await this.ticketRepository.create({ eventId, name, price, quantity });
  }
}

export { CreateTicketUseCase };
