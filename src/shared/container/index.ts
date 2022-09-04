import { container } from "tsyringe";

import { ICompanyRepository } from "../../modules/ticket/repositories/ICompanyRepository";
import { CompanyRepository } from "../../modules/ticket/repositories/Implementations/CompanyRepository";

container.registerSingleton<ICompanyRepository>(
  "CompanyRepository",
  CompanyRepository
);
