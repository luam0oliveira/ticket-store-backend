import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateEventUseCase } from "./CreateEventUseCase";

class CreateEventController {
  async handle(request: Request, response: Response) {
    const createEventUseCase = container.resolve(CreateEventUseCase);
    const event = await createEventUseCase.execute(request.body);
    return response.status(201).json(event);
  }
}

export { CreateEventController };
export default new CreateEventController();
