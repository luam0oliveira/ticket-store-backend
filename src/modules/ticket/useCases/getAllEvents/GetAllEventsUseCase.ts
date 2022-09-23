import { inject, injectable } from "tsyringe";

import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";

@injectable()
class GetAllEventsUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute(companyId: number) {
    return await this.eventRepository.getAllEvents(companyId);
  }
}

export { GetAllEventsUseCase };
