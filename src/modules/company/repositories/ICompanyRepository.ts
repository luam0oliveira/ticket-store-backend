import { Company } from "@prisma/client";

import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { IDeleteCompanyDTO } from "../dtos/IDeleteCompanyDTO";

interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  getAllCompanies(): Promise<Company[]>;
  delete({ id }: IDeleteCompanyDTO): Promise<void>;
}

export { ICompanyRepository };
