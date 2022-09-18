import { inject, injectable } from "tsyringe";

import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { Company } from "@prisma/client";
import { AppError } from "@shared/error/AppError";

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute({ name }: ICreateCompanyDTO): Promise<Company> {
    const companyAlreadyExists = await this.companyRepository.getCompanyByName(
      name
    );

    if (companyAlreadyExists?.length && companyAlreadyExists.length > 0) {
      throw new AppError(401, "Company name already in use!");
    }

    const company = await this.companyRepository.create({ name });
    return company;
  }
}

export { CreateCompanyUseCase };
