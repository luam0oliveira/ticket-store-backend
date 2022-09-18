import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { Company } from "@prisma/client";
import { AppError } from "@shared/error/AppError";

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

  async getAllCompanies(): Promise<Company[]> {
    return this.companies;
  }

  async delete(id: number): Promise<void> {
    const companyIndex = this.companies.findIndex(
      (company) => company.id === id
    );

    if (companyIndex === -1) {
      throw new AppError(404, "This company id not exists.");
    }

    this.companies = [
      ...this.companies.slice(0, companyIndex),
      ...this.companies.slice(companyIndex + 1),
    ];
  }

  async getCompanyByName(name: string): Promise<Company[] | undefined | null> {
    const company = this.companies.filter((company) =>
      company.name.includes(name)
    );

    return company;
  }
}

export { InMemoryCompanyRepository };
