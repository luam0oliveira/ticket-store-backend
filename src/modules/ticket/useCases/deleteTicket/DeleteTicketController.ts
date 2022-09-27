import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

class DeleteTicketController {
  async handle(request: Request, response: Response) {
    const ticketId = Number(request.params.ticketId);
    const deleteTicketUseCase = container.resolve(DeleteTicketUseCase);
    await deleteTicketUseCase.execute(ticketId);
    return response.status(204).json();
  }
}

export { DeleteTicketController };
export default new DeleteTicketController();
