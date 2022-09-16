import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { InMemoryCompanyRepository } from "@modules/ticket/repositories/inMemory/InMemoryCompanyRepository";
import { CreateCompanyUseCase } from "@modules/ticket/useCases/createCompany/CreateCompanyUseCase";
import { Company } from "@prisma/client";

let companyUseCase: CreateCompanyUseCase;
let companyRepository: ICompanyRepository;

describe("HOLLY WAY TO DESK", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompanyRepository();
    companyUseCase = new CreateCompanyUseCase(companyRepository);
  });
  it("should be able to create a new company", async () => {
    const company: Company = { name: "Company test", id: 1 };

    const created_company = await companyUseCase.execute(company);

    expect(created_company).toHaveProperty("name");
  });
});
