import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
// import { IDeleteCompanyDTO } from "@modules/ticket/dtos/IDeleteCompanyDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { Company } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

class CompanyRepository implements ICompanyRepository {
  async getCompanyByName(name: string): Promise<Company[] | undefined | null> {
    const company = await prismaClient.company.findMany({
      where: { name: { contains: name } },
    });
    return company;
  }
  async create({ name }: ICreateCompanyDTO): Promise<Company> {
    const ticket = await prismaClient.company.create({ data: { name } });
    return ticket;
  }

  async getAllCompanies(): Promise<Company[]> {
    return await prismaClient.company.findMany();
  }

  async delete(id: number): Promise<void> {
    await prismaClient.company.delete({ where: { id } });
  }
}

export { CompanyRepository };
