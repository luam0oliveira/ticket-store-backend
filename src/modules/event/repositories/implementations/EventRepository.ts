import { Event } from "@prisma/client";

import { prismaClient } from "../../../../prisma/client";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";
import { IDeleteEventDTO } from "../../dtos/IDeleteEventDTO";
import { IGetAllEvents } from "../../dtos/IGetAllEvents";
import { IEventRepository } from "../IEventRepository";

class EventRepository implements IEventRepository {
  async create({ companyId, date, name }: ICreateEventDTO): Promise<void> {
    await prismaClient.event.create({ data: { companyId, date, name } });
  }

  async getAllEvents({ companyId }: IGetAllEvents): Promise<Event[]> {
    return await prismaClient.event.findMany({ where: { companyId } });
  }

  async delete({ id }: IDeleteEventDTO): Promise<void> {
    await prismaClient.event.delete({ where: { id } });
  }
}

export { EventRepository };
