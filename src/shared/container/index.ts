import { container } from "tsyringe";

import { ICompanyRepository } from "../../modules/company/repositories/ICompanyRepository";
import { CompanyRepository } from "../../modules/company/repositories/implementations/CompanyRepository";
import { IEventRepository } from "../../modules/event/repositories/IEventRepository";
import { EventRepository } from "../../modules/event/repositories/implementations/EventRepository";
import { TicketRepository } from "../../modules/ticket/repositories/Implementations/TicketRepository";
import { ITicketRepository } from "../../modules/ticket/repositories/ITicketRepository";

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
