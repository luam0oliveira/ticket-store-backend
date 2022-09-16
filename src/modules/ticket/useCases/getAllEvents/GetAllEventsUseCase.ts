import { inject, injectable } from "tsyringe";

import { IGetAllEvents } from "@modules/ticket/dtos/IGetAllEvents";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";

@injectable()
class GetAllEventsUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute({ companyId }: IGetAllEvents) {
    return await this.eventRepository.getAllEvents({ companyId });
  }
}

export { GetAllEventsUseCase };
