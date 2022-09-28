import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@prisma/client";

import { IUserRepository } from "../IUserRepositories";

class InMemoryUserRepository implements IUserRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const id = this.users.length + 1;

    const user: User = {
      ...data,
      id,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }
}

export { InMemoryUserRepository };
