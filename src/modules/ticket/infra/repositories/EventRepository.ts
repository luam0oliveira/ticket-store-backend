import { Event } from "@prisma/client";
import { prismaClient } from "@shared/infra/prisma/client";

import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IEventRepository } from "../../repositories/IEventRepository";

class EventRepository implements IEventRepository {
  async getEventById(eventId: number): Promise<Event | null | undefined> {
    return await prismaClient.event.findUnique({ where: { id: eventId } });
  }
  async create({ companyId, date, name }: ICreateEventDTO): Promise<Event> {
    return await prismaClient.event.create({ data: { companyId, date, name } });
  }

  async getAllEvents(companyId: number): Promise<Event[]> {
    return await prismaClient.event.findMany({ where: { companyId } });
  }

  async delete(id: number): Promise<void> {
    await prismaClient.event.delete({ where: { id } });
  }

  async getEventByName(eventName: string): Promise<Event[] | null | undefined> {
    return await prismaClient.event.findMany({
      where: { name: { contains: eventName } },
    });
  }
}

export { EventRepository };
