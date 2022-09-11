import { Company } from "@prisma/client";

import { prismaClient } from "../../../../prisma/client";
import { ICreateCompanyDTO } from "../../dtos/ICreateCompanyDTO";
import { IDeleteCompanyDTO } from "../../dtos/IDeleteCompanyDTO";
import { ICompanyRepository } from "../ICompanyRepository";

class CompanyRepository implements ICompanyRepository {
  async create({ name }: ICreateCompanyDTO): Promise<Company> {
    const ticket = await prismaClient.company.create({ data: { name } });
    return ticket;
  }

  async delete({ id }: IDeleteCompanyDTO): Promise<void> {
    await prismaClient.company.delete({ where: { id } });
  }
}

export { CompanyRepository };
