import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { ICreateTicketDTO } from "@modules/ticket/dtos/ICreateTicketDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { InMemoryCompanyRepository } from "@modules/ticket/repositories/inMemory/InMemoryCompanyRepository";
import { InMemoryEventRepository } from "@modules/ticket/repositories/inMemory/InMemoryEventRepository";
import { InMemoryTicketRepository } from "@modules/ticket/repositories/inMemory/InMemoryTicketRepository";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { CreateTicketUseCase } from "@modules/ticket/useCases/createTicket/CreateTicketUseCase";
import { AppError } from "@shared/error/AppError";

let ticketRepository: ITicketRepository;
let createTicketUseCase: CreateTicketUseCase;
let eventRepository: IEventRepository;
let companyRepository: ICompanyRepository;

describe("Create ticket", () => {
  beforeEach(async () => {
    ticketRepository = new InMemoryTicketRepository();
    createTicketUseCase = new CreateTicketUseCase(ticketRepository);
    eventRepository = new InMemoryEventRepository();
    companyRepository = new InMemoryCompanyRepository();

    const company: ICreateCompanyDTO = { name: "Company test" };
    await companyRepository.create(company);
    const event: ICreateEventDTO = {
      companyId: 1,
      date: new Date("Tue Sep 20 2022 04:49:36 GMT+0000"),
      name: "Event test",
    };
    await eventRepository.create(event);
  });

  it("should be able to create a ticket", async () => {
    const ticket: ICreateTicketDTO = {
      eventId: 1,
      name: "Event Test",
      price: 100,
      quantity: 100,
    };

    const ticket_created = await createTicketUseCase.execute(ticket);

    expect(ticket_created).toHaveProperty("id");
  });

  it("should not be able to create a duplicate ticket", () => {
    expect(async () => {
      const ticket: ICreateTicketDTO = {
        eventId: 1,
        name: "Event Test",
        price: 100,
        quantity: 100,
      };
      await createTicketUseCase.execute(ticket);
      await createTicketUseCase.execute(ticket);
    }).rejects.toBeInstanceOf(AppError);
  });
});
