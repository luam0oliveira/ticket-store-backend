import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/user/repositories/IUserRepositories";

@injectable()
class GetAllUsersUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {
    //
  }

  async execute() {
    return await this.userRepository.getAllUsers();
  }
}

export { GetAllUsersUseCase };
