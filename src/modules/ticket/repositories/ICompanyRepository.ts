import { Company } from "@prisma/client";

import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";

interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
}

export { ICompanyRepository };
