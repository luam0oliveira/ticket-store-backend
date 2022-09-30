import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const userData = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const user = await authenticateUserUseCase.execute(userData);
    return response.status(200).json(user);
  }
}

export { AuthenticateUserController };
export default new AuthenticateUserController();
