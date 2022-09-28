import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {
    //
  }

  async execute({ email, password }: ICreateUserDTO) {
    const passwordHashed = await hash(password, 8);

    const user = await this.userRepository.create({
      email,
      password: passwordHashed,
    });

    return user;
  }
}

export { CreateUserUseCase };
