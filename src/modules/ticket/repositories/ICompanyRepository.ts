import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { Company } from "@prisma/client";

interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  getAllCompanies(): Promise<Company[]>;
  getCompanyByName(name: string): Promise<Company[] | undefined | null>;
  delete(id: number): Promise<void>;
}

export { ICompanyRepository };
