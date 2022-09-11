import { inject, injectable } from "tsyringe";

import { ICompanyRepository } from "../../repositories/ICompanyRepository";

@injectable()
class GetAllCompaniesUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute() {
    return await this.companyRepository.getAllCompanies();
  }
}

export { GetAllCompaniesUseCase };
