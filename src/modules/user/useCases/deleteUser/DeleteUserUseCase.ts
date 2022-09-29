import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { AppError } from "@shared/error/AppError";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {
    //
  }

  async execute(id: number) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists?.id) {
      throw new AppError(400, "User does not exist");
    }

    await this.userRepository.delete(id);
  }
}

export { DeleteUserUseCase };
