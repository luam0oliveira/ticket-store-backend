import { inject, injectable } from "tsyringe";

import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";

@injectable()
class GetEventByNameUseCase {
  constructor(
    @inject("EventRepository") private eventRepository: IEventRepository
  ) {
    //
  }

  async execute(name: string) {
    const events = await this.eventRepository.getEventByName(name);
    return events;
  }
}

export { GetEventByNameUseCase };
