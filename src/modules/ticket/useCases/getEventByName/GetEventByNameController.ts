import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetEventByNameUseCase } from "./GetEventByNameUseCase";

class GetEventByNameController {
  async handle(request: Request, response: Response) {
    const eventName = request.params.eventName;
    const getEventByNameUseCase = container.resolve(GetEventByNameUseCase);
    const events = await getEventByNameUseCase.execute(eventName);
    return response.status(200).json(events);
  }
}

export { GetEventByNameController };
export default new GetEventByNameController();
