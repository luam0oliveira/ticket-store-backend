import { compare } from "bcrypt";
import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { AppError } from "@shared/error/AppError";

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

    const passwordIsCorrect = await compare(password, String(user?.password));

    if (!passwordIsCorrect) {
      throw new AppError(400, "Email or password incorrect!");
    }

    const token = sign(
      { email, admin: user?.isAdmin, name: user?.name },
      String(process.env.JWT_SECRET_KEY),
      {
        subject: user?.email,
        expiresIn: "99d",
      }
    );

    return { user: { name: user?.name, email: user?.email }, token };
  }
}

export { AuthenticateUserUseCase };
