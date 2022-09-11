import { Event } from "@prisma/client";

import { IDeleteCompanyDTO } from "../../company/dtos/IDeleteCompanyDTO";
import { ICreateEventDTO } from "../dtos/ICreateEventDTO";
import { IGetAllEvents } from "../dtos/IGetAllEvents";

interface IEventRepository {
  create({ companyId, date, name }: ICreateEventDTO): Promise<void>;
  getAllEvents({ companyId }: IGetAllEvents): Promise<Event[]>;
  delete({ id }: IDeleteCompanyDTO): Promise<void>;
}

export { IEventRepository };
