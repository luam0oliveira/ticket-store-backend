import { inject, injectable } from "tsyringe";

import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { AppError } from "@shared/error/AppError";

@injectable()
class DeleteEventUseCase {
  constructor(
    @inject("EventRepository")
    private eventRepository: IEventRepository
  ) {
    //
  }

  async execute(id: number) {
    const eventNotExists = await this.eventRepository.getEventById(id);

    if (eventNotExists === null || eventNotExists === undefined) {
      throw new AppError(400, "Event Already Exists!");
    }

    await this.eventRepository.delete(id);
  }
}
export { DeleteEventUseCase };
