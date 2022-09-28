import { User } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
}

export { IUserRepository };
