import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { Event } from "@prisma/client";

interface IEventRepository {
  create({ companyId, date, name }: ICreateEventDTO): Promise<void>;
  getAllEvents(companyId: number): Promise<Event[]>;
  delete(id: number): Promise<void>;
}

export { IEventRepository };
