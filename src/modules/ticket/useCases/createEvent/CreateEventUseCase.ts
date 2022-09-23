import { inject, injectable } from "tsyringe";

import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { AppError } from "@shared/error/AppError";

@injectable()
class CreateEventUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute({ companyId, date, name }: ICreateEventDTO) {
    const eventExists = await this.eventRepository.getEventByName(name);

    if (eventExists?.length && eventExists.length !== -1) {
      throw new AppError(400, "Event already exists.");
    }

    return await this.eventRepository.create({
      companyId,
      date: new Date(date),
      name,
    });
  }
}

export { CreateEventUseCase };
