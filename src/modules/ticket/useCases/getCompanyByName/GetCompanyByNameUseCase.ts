import { inject, injectable } from "tsyringe";

import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";

@injectable()
class GetCompanyByNameUseCase {
  constructor(
    @inject("CompanyRepository") private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute(name: string) {
    const companies = await this.companyRepository.getCompanyByName(name);
    return companies;
  }
}

export { GetCompanyByNameUseCase };
