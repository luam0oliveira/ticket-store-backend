import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllEventsUseCase } from "./GetAllEventsUseCase";

class GetAllEventsController {
  async handle(response: Response, request: Request) {
    console.log(request.params);
    const companyId = Number(request.params.companyId);

    const getAllEventsUseCase = container.resolve(GetAllEventsUseCase);

    const events = await getAllEventsUseCase.execute(companyId);

    return response.status(200).json(events);
  }
}

export { GetAllEventsController };
export default new GetAllEventsController();
