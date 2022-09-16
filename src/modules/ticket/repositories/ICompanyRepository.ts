import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { Company } from "@prisma/client";

interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  getAllCompanies(): Promise<Company[]>;
  delete(id: number): Promise<void>;
}

export { ICompanyRepository };
