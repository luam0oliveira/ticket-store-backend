import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { User } from "@prisma/client";

import { IUserRepository } from "../IUserRepositories";

class InMemoryUserRepository implements IUserRepository {
  users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
  async findByEmail(email: string): Promise<User | null | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async findById(id: number): Promise<User | null | undefined> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async delete(id: number): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users = [
      ...this.users.slice(0, userIndex),
      ...this.users.slice(userIndex + 1),
    ];
  }

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
