import { inject, injectable } from "tsyringe";

import { IDeleteEventDTO } from "@modules/ticket/dtos/IDeleteEventDTO";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";

@injectable()
class DeleteEventUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute({ id }: IDeleteEventDTO) {
    await this.eventRepository.delete({ id });
  }
}
export { DeleteEventUseCase };
