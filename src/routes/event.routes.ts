import { Router } from "express";

import { CreateCompanyController } from "../modules/ticket/useCases/createCompany/CreateCompanyController";

const eventRoutes = Router();

const createCompanyController = new CreateCompanyController();

eventRoutes.post("/", createCompanyController.handle);

export { eventRoutes };
