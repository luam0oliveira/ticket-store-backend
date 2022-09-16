import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { Company } from "@prisma/client";

class InMemoryCompanyRepository implements ICompanyRepository {
  private companies: Company[] = [];

  async create(data: ICreateCompanyDTO): Promise<Company> {
    const id = this.companies.length + 1;

    const company: Company = {
      id,
      name: data.name,
    };

    this.companies.push(company);

    return company;
  }
  getAllCompanies(): Promise<Company[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { InMemoryCompanyRepository };
