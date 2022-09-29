import { User } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null | undefined>;
  delete(id: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
  findById(id: number): Promise<User | null | undefined>;
}

export { IUserRepository };
