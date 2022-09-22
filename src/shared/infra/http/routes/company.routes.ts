import { Router } from "express";

import createCompanyController from "@modules/ticket/useCases/createCompany/CreateCompanyController";
import deleteCompanyController from "@modules/ticket/useCases/deleteCompany/DeleteCompanyController";
import getAllCompaniesController from "@modules/ticket/useCases/getAllCompanies/GetAllCompaniesController";

const companyRoutes = Router();

companyRoutes.get("/", getAllCompaniesController.handle);

companyRoutes.post("/", createCompanyController.handle);

companyRoutes.delete("/:id", deleteCompanyController.handle);

export { companyRoutes };
