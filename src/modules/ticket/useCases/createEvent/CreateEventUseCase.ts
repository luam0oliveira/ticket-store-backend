import { inject, injectable } from "tsyringe";

import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";

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
