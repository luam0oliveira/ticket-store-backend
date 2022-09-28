import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { User } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    return await prismaClient.user.create({ data });
  }
}

export { UserRepository };
