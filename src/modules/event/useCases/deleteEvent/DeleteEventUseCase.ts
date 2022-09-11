import { inject, injectable } from "tsyringe";

import { IDeleteEventDTO } from "../../dtos/IDeleteEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";

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
