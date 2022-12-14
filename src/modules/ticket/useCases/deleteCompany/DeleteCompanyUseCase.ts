import { inject, injectable } from "tsyringe";

import { ICompanyRepository } from "../../repositories/ICompanyRepository";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute(id: number) {
    await this.companyRepository.delete(id);
  }
}
export { DeleteCompanyUseCase };
