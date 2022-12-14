import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { AppError } from "@shared/error/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {
    //
  }

  async execute({ name, email, password }: ICreateUserDTO) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists?.email) {
      throw new AppError(400, "User already exists.");
    }

    const passwordHashed = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}

export { CreateUserUseCase };
