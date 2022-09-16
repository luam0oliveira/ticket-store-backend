import { inject, injectable } from "tsyringe";

import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { Company } from "@prisma/client";

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute({ name }: ICreateCompanyDTO): Promise<Company> {
    const company = await this.companyRepository.create({ name });
    return company;
  }
}

export { CreateCompanyUseCase };
