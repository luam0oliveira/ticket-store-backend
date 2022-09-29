import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { prisma, User } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    return await prismaClient.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null | undefined> {
    return await prismaClient.user.findUnique({ where: { email } });
  }

  async delete(id: number): Promise<void> {
    await prismaClient.user.delete({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    return await prismaClient.user.findMany();
  }

  async findById(id: number): Promise<User | null | undefined> {
    return await prismaClient.user.findUnique({ where: { id } });
  }
}

export { UserRepository };
