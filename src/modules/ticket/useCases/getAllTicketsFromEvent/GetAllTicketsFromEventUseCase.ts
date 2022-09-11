import { inject, injectable } from "tsyringe";

import { IDeleteTicketDTO } from "../../dtos/IDeleteTicketDTO";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class GetAllTicketsFromEventUseCase {
  constructor(
    @inject("TicketRepository")
    private ticketRepository: ITicketRepository
  ) {
    //
  }

  async execute({ ticketId }: IDeleteTicketDTO) {
    await this.ticketRepository.delete({ ticketId });
  }
}

export { GetAllTicketsFromEventUseCase };
