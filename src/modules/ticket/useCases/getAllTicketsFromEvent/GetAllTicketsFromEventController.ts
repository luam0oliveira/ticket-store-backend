import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTicketsFromEventUseCase } from "./GetAllTicketsFromEventUseCase";

class GetAllTicketsFromEventController {
  async handle(request: Request, response: Response) {
    const { ticketId } = request.body;
    const getAllTicketsFromEventController = container.resolve(
      GetAllTicketsFromEventUseCase
    );

    await getAllTicketsFromEventController.execute({ ticketId });

    return response.status(201).json();
  }
}

export { GetAllTicketsFromEventController };
export default new GetAllTicketsFromEventController();
