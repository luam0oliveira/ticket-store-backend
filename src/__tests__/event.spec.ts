import { ICreateCompanyDTO } from "@modules/ticket/dtos/ICreateCompanyDTO";
import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { InMemoryCompanyRepository } from "@modules/ticket/repositories/inMemory/InMemoryCompanyRepository";
import { InMemoryEventRepository } from "@modules/ticket/repositories/inMemory/InMemoryEventRepository";
import { CreateEventUseCase } from "@modules/ticket/useCases/createEvent/CreateEventUseCase";
import { DeleteEventUseCase } from "@modules/ticket/useCases/deleteEvent/DeleteEventUseCase";
import { AppError } from "@shared/error/AppError";

let eventRepository: IEventRepository;
let createEventUseCase: CreateEventUseCase;
let companyRepository: ICompanyRepository;
let deleteEventUseCase: DeleteEventUseCase;

describe("Create event", () => {
  beforeEach(async () => {
    eventRepository = new InMemoryEventRepository();
    createEventUseCase = new CreateEventUseCase(eventRepository);
    companyRepository = new InMemoryCompanyRepository();
    const company: ICreateCompanyDTO = { name: "Company test" };

    await companyRepository.create(company);
  });

  it("should be able to create a new event", async () => {
    const event: ICreateEventDTO = {
      companyId: 1,
      date: new Date("Tue Sep 20 2022 04:49:36 GMT+0000"),
      name: "Event test",
    };

    const event_created = await createEventUseCase.execute(event);

    expect(event_created).toHaveProperty("id");
  });

  it("should not be able to create a duplicate event name", () => {
    expect(async () => {
      const event: ICreateEventDTO = {
        companyId: 1,
        date: new Date("Tue Sep 20 2022 04:49:36 GMT+0000"),
        name: "Event test",
      };

      await createEventUseCase.execute(event);
      await createEventUseCase.execute(event);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Delete event", () => {
  beforeEach(async () => {
    eventRepository = new InMemoryEventRepository();
    deleteEventUseCase = new DeleteEventUseCase(eventRepository);
    companyRepository = new InMemoryCompanyRepository();
    const company: ICreateCompanyDTO = { name: "Company test" };

    await companyRepository.create(company);
  });

  it("should be able to delete a event", async () => {
    const event: ICreateEventDTO = {
      companyId: 1,
      date: new Date("Tue Sep 20 2022 04:49:36 GMT+0000"),
      name: "Event test",
    };

    const event_created = await eventRepository.create(event);

    await deleteEventUseCase.execute(event_created.id);

    expect((await eventRepository.getAllEvents(1)).length).toEqual(0);
  });

  it("should not be able to delete a nonexistent event", () => {
    expect(async () => {
      await deleteEventUseCase.execute(1);
    }).rejects.toBeInstanceOf(AppError);
  });
});

describe("Find all events", () => {
  beforeEach(async () => {
    eventRepository = new InMemoryEventRepository();
    deleteEventUseCase = new DeleteEventUseCase(eventRepository);
    companyRepository = new InMemoryCompanyRepository();
    const company: ICreateCompanyDTO = { name: "Company test" };

    await companyRepository.create(company);
  });

  it("should be able to find all events", async () => {
    const event: ICreateEventDTO = {
      companyId: 1,
      date: new Date("Tue Sep 20 2022 04:49:36 GMT+0000"),
      name: "Event test",
    };

    await eventRepository.create(event);

    await eventRepository.create({ ...event, name: "Event test1" });

    expect((await eventRepository.getAllEvents(1)).length).toEqual(2);
  });
});
