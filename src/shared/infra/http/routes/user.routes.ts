import { Router } from "express";

import authenticateUserController from "@modules/user/useCases/authenticateUser/AuthenticateUserController";
import createUserController from "@modules/user/useCases/createUser/CreateUserController";
import deleteUserController from "@modules/user/useCases/deleteUser/DeleteUserController";
import getAllUsersController from "@modules/user/useCases/getAllUsers/GetAllUsersController";

const userRoutes = Router();

userRoutes.get("/", getAllUsersController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.post("/authenticate", authenticateUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };
