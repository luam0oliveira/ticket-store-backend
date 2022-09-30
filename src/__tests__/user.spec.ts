import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { InMemoryUserRepository } from "@modules/user/repositories/InMemoryRepository/InMemoryUserRepository";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { CreateUserUseCase } from "@modules/user/useCases/createUser/CreateUserUseCase";
import { DeleteUserUseCase } from "@modules/user/useCases/deleteUser/DeleteUserUseCase";
import { GetAllUsersUseCase } from "@modules/user/useCases/getAllUsers/GetAllUsersUseCase";
import { AppError } from "@shared/error/AppError";

let createUserUseCase: CreateUserUseCase;
let userRepository: IUserRepository;
let deleteUserUseCase: DeleteUserUseCase;
let getAllUsersUseCase: GetAllUsersUseCase;

describe("Create User", () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });
  it("should be able to create a new user", async () => {
    const user: ICreateUserDTO = {
      name: "test",
      email: "user@test.com",
      password: "password",
    };

    const created_user = await createUserUseCase.execute(user);

    expect(created_user).toHaveProperty("id");
  });

  it("should not be able to create a new user with duplicated email", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "test",
        email: "user@test.com",
        password: "password",
      };

      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Delete User", () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    deleteUserUseCase = new DeleteUserUseCase(userRepository);
  });

  it("should be able to delete a user", async () => {
    const user: ICreateUserDTO = {
      name: "test",
      email: "user@test.com",
      password: "password",
    };

    const created_user = await userRepository.create(user);

    await deleteUserUseCase.execute(created_user.id);

    expect((await userRepository.getAllUsers()).length).toBe(0);
  });

  it("should not be able to delete a nonexistent user", () => {
    expect(async () => {
      await deleteUserUseCase.execute(0);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Get All Users", () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
  });

  it("should be able to delete a user", async () => {
    const user: ICreateUserDTO = {
      name: "test",
      email: "user@test.com",
      password: "password",
    };

    await userRepository.create(user);
    await userRepository.create({ ...user, email: "user1@test.com" });

    expect((await getAllUsersUseCase.execute()).length).toBe(2);
  });
});
