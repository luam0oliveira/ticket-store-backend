import { inject, injectable } from "tsyringe";

// import { IDeleteCompanyDTO } from "../../dtos/IDeleteCompanyDTO";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) {
    //
  }

  async execute({ id }: IDeleteCompanyDTO) {
    await this.companyRepository.delete({ id });
  }
}
export { DeleteCompanyUseCase };
