import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

class DeleteTicketController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const deleteTicketUseCase = container.resolve(DeleteTicketUseCase);
    deleteTicketUseCase.execute(id);
    return response.status(204);
  }
}

export { DeleteTicketController };
export default new DeleteTicketController();
