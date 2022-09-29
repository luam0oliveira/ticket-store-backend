import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(id);
    return response.status(204).json();
  }
}

export { DeleteUserController };
export default new DeleteUserController();
