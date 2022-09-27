import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTicketsUseCase } from "./GetAllTicketsUseCase";

class GetAllTicketsController {
  async handle(request: Request, response: Response) {
    const ticketId = Number(request.params.ticketId);
    const getAllTicketsUseCase = container.resolve(GetAllTicketsUseCase);
    const tickets = await getAllTicketsUseCase.execute(ticketId);
    return response.status(201).json(tickets);
  }
}

export { GetAllTicketsController };
export default new GetAllTicketsController();
