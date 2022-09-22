import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTicketsUseCase } from "./GetAllTicketsUseCase";

class GetAllTicketsController {
  async handle(request: Request, response: Response) {
    const event_id = Number(request.params.event_id);
    const getAllTicketsUseCase = container.resolve(GetAllTicketsUseCase);
    const tickets = getAllTicketsUseCase.execute(event_id);
    return response.status(201).json(tickets);
  }
}

export { GetAllTicketsController };
export default new GetAllTicketsController();
