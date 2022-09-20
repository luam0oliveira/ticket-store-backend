import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { Event } from "@prisma/client";

interface IEventRepository {
  create({ companyId, date, name }: ICreateEventDTO): Promise<Event>;
  getAllEvents(companyId: number): Promise<Event[]>;
  delete(id: number): Promise<void>;
  getEventByName(eventName: string): Promise<Event[] | undefined | null>;
  getEventById(eventId: number): Promise<Event | undefined | null>;
}

export { IEventRepository };
