import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteEventUseCase } from "./DeleteEventUseCase";

class DeleteEventController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);

    const deleteEventUseCase = container.resolve(DeleteEventUseCase);

    await deleteEventUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteEventController };

export default new DeleteEventController();
