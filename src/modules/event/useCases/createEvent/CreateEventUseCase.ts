import { inject, injectable } from "tsyringe";

import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute({ companyId, date, name }: ICreateEventDTO) {
    this.eventRepository.create({ companyId, date, name });
  }
}

export { CreateEventUseCase };
