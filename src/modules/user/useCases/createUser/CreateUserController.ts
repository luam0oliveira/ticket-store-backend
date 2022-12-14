import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const userData = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute(userData);
    return response.status(201).json(user);
  }
}

export { CreateUserController };
export default new CreateUserController();
