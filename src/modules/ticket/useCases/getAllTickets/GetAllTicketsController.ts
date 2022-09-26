import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTicketsUseCase } from "./GetAllTicketsUseCase";

class GetAllTicketsController {
  async handle(request: Request, response: Response) {
    const eventId = Number(request.params.eventId);
    const getAllTicketsUseCase = container.resolve(GetAllTicketsUseCase);
    const tickets = await getAllTicketsUseCase.execute(eventId);
    return response.status(201).json(tickets);
  }
}

export { GetAllTicketsController };
export default new GetAllTicketsController();
