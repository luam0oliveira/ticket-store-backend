import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllCompaniesUseCase } from "./GetAllCompaniesUseCase";

class GetAllCompaniesController {
  async handle(request: Request, response: Response) {
    const getAllCompaniesUseCase = container.resolve(GetAllCompaniesUseCase);

    const companies = await getAllCompaniesUseCase.execute();

    return response.status(200).json(companies);
  }
}
export { GetAllCompaniesController };
export default new GetAllCompaniesController();
