import { Router } from "express";

import createCompanyController from "../modules/company/useCases/createCompany/CreateCompanyController";
import deleteCompanyController from "../modules/company/useCases/deleteCompany/DeleteCompanyController";
import getAllCompaniesController from "../modules/company/useCases/getAllCompanies/GetAllCompaniesController";

const companyRoutes = Router();

companyRoutes.get("/", getAllCompaniesController.handle);

companyRoutes.post("/", createCompanyController.handle);

companyRoutes.delete("/:id", deleteCompanyController.handle);

export { companyRoutes };
