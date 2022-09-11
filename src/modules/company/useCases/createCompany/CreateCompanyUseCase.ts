import { Company } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

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
