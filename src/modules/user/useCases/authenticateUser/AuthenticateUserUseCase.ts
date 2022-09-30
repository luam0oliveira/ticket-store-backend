import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/user/repositories/IUserRepositories";

config();

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {
    //
  }

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    console.log(user);
    const token = sign({ email }, String(process.env.JWT_SECRET_KEY), {
      subject: user?.email,
      expiresIn: "99d",
    });

    return { user: { name: user?.name, email: user?.email }, token };
  }
}

export { AuthenticateUserUseCase };
