import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController {
  async handle(request: Request, response: Response) {
    const { eventId, name, price, quantity } = request.body;
    const createTicketUseCase = container.resolve(CreateTicketUseCase);

    await createTicketUseCase.execute({ eventId, name, price, quantity });

    return response.status(201).json();
  }
}

export { CreateTicketController };
export default new CreateTicketController();
