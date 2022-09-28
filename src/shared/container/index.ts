import { container } from "tsyringe";

import { CompanyRepository } from "@modules/ticket/infra/prisma/repositories/CompanyRepository";
import { EventRepository } from "@modules/ticket/infra/prisma/repositories/EventRepository";
import { TicketRepository } from "@modules/ticket/infra/prisma/repositories/TicketRepository";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";
import { UserRepository } from "@modules/user/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "@modules/user/repositories/IUserRepositories";

container.registerSingleton<ICompanyRepository>(
  "CompanyRepository",
  CompanyRepository
);

container.registerSingleton<IEventRepository>(
  "EventRepository",
  EventRepository
);

container.registerSingleton<ITicketRepository>(
  "TicketRepository",
  TicketRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
