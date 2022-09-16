import { container } from "tsyringe";

import { CompanyRepository } from "@modules/ticket/infra/repositories/CompanyRepository";
import { EventRepository } from "@modules/ticket/infra/repositories/EventRepository";
import { TicketRepository } from "@modules/ticket/infra/repositories/TicketRepository";
import { ICompanyRepository } from "@modules/ticket/repositories/ICompanyRepository";
import { IEventRepository } from "@modules/ticket/repositories/IEventRepository";
import { ITicketRepository } from "@modules/ticket/repositories/ITicketRepository";

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
