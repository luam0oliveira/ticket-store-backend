import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";

import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController {
  async handle(request: Request, response: Response) {
    const ticket: ICreateTicketDTO = request.body.ticket;
    const createTicketUseCase = container.resolve(CreateTicketUseCase);
    const created_ticket = createTicketUseCase.execute(ticket);
    return response.status(201).json(created_ticket);
  }
}

export { CreateTicketController };
export default new CreateTicketController();
