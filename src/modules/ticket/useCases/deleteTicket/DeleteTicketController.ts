import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

class DeleteTicketController {
  async handle(request: Request, response: Response) {
    const { ticketId } = request.body;
    const createTicketUseCase = container.resolve(DeleteTicketUseCase);

    await createTicketUseCase.execute({ ticketId });

    return response.status(201).json();
  }
}

export { DeleteTicketController };
export default new DeleteTicketController();
