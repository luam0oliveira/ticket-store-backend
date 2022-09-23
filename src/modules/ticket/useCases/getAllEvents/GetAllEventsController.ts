import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllEventsUseCase } from "./GetAllEventsUseCase";

class GetAllEventsController {
  async handle(request: Request, response: Response) {
    const companyId = Number(request.params.companyId);

    const getAllEventsUseCase = container.resolve(GetAllEventsUseCase);

    const events = await getAllEventsUseCase.execute(companyId);
    return response.status(200).json(events);
  }
}

export { GetAllEventsController };
export default new GetAllEventsController();
