import { ICreateUserDTO } from "@modules/user/dtos/ICreateUserDTO";
import { InMemoryUserRepository } from "@modules/user/repositories/InMemoryRepository/InMemoryUserRepository";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";
import { CreateUserUseCase } from "@modules/user/useCases/createUser/CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepository: IUserRepository;

describe("Create User", () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });
  it("should be able to create a new user", async () => {
    const user: ICreateUserDTO = {
      email: "user@test.com",
      password: "password",
    };

    const created_user = await createUserUseCase.execute(user);

    expect(created_user).toHaveProperty("id");
  });
});
