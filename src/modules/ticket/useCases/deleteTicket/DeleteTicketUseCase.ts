import { inject, injectable } from "tsyringe";

import { IDeleteTicketDTO } from "../../dtos/IDeleteTicketDTO";
import { ITicketRepository } from "../../repositories/ITicketRepository";

@injectable()
class DeleteTicketUseCase {
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

export { DeleteTicketUseCase };
