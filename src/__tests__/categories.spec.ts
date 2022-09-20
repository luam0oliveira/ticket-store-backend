import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { InMemoryCompanyRepository } from "@modules/ticket/repositories/inMemory/InMemoryCompanyRepository";
import { CreateCompanyUseCase } from "@modules/ticket/useCases/createCompany/CreateCompanyUseCase";
import { DeleteCompanyUseCase } from "@modules/ticket/useCases/deleteCompany/DeleteCompanyUseCase";
import { GetAllCompaniesUseCase } from "@modules/ticket/useCases/getAllCompanies/GetAllCompaniesUseCase";
import { GetCompanyByNameUseCase } from "@modules/ticket/useCases/getCompanyByName/GetCompanyByNameUseCase";
import { Company } from "@prisma/client";
import { AppError } from "@shared/error/AppError";

let createCompanyUseCase: CreateCompanyUseCase;
let companyRepository: ICompanyRepository;
let deleteCompanyUseCase: DeleteCompanyUseCase;
let getAllCompaniesUseCase: GetAllCompaniesUseCase;
let getCompanyByNameUseCase: GetCompanyByNameUseCase;

describe("Create company", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompanyRepository();
    createCompanyUseCase = new CreateCompanyUseCase(companyRepository);
  });
  it("should be able to create a new company", async () => {
    const company: Company = { name: "Company test", id: 1 };

    const created_company = await createCompanyUseCase.execute(company);

    expect(created_company).toHaveProperty("name");
  });

  it("should not be able to create a duplicate company", () => {
    expect(async () => {
      const company: Company = { name: "Company test", id: 1 };
      const sameNameCompany: Company = { name: "Company test", id: 2 };

      await createCompanyUseCase.execute(company);
      await createCompanyUseCase.execute(sameNameCompany);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Delete company", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompanyRepository();
    deleteCompanyUseCase = new DeleteCompanyUseCase(companyRepository);
  });
  it("should be able to delete a company", async () => {
    const company: Company = { name: "Company test", id: 1 };

    await companyRepository.create(company);

    await deleteCompanyUseCase.execute(company.id);

    const companies = await companyRepository.getAllCompanies();

    expect(companies).toEqual([]);
  });

  it("should not be able to delete a nonexistent category", () => {
    expect(async () => {
      await deleteCompanyUseCase.execute(0);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Get all companies", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompanyRepository();
    getAllCompaniesUseCase = new GetAllCompaniesUseCase(companyRepository);
  });
  it("should be able to list all companies", async () => {
    const company: Company = { name: "Company test", id: 1 };

    await companyRepository.create(company);

    const companies = await getAllCompaniesUseCase.execute();

    expect(companies).toEqual([company]);
  });
});

describe("Get companies by name", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompanyRepository();
    getCompanyByNameUseCase = new GetCompanyByNameUseCase(companyRepository);
  });
  it("should be able to list all companies", async () => {
    const company: Company = { name: "Company test", id: 1 };
    const company_1: Company = { name: "Company testes", id: 2 };

    await companyRepository.create(company);
    await companyRepository.create(company_1);

    const companies = await getCompanyByNameUseCase.execute(company.name);

    expect(companies).toEqual([company, company_1]);
  });
});
