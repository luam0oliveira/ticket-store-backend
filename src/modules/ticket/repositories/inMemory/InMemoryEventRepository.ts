import { ICreateEventDTO } from "@modules/ticket/dtos/ICreateEventDTO";
import { Event } from "@prisma/client";

import { IEventRepository } from "../IEventRepository";

class InMemoryEventRepository implements IEventRepository {
  private events: Event[] = [];

  async getEventById(eventId: number): Promise<Event | null | undefined> {
    return this.events.find((event) => event.id === eventId);
  }

  async getEventByName(eventName: string): Promise<Event[] | null | undefined> {
    return this.events.filter((event) =>
      event.name.toLowerCase().includes(eventName.toLowerCase())
    );
  }

  async create({ companyId, date, name }: ICreateEventDTO): Promise<Event> {
    const id = this.events.length + 1;
    const event: Event = { companyId, date, name, id };
    this.events.push(event);
    return event;
  }
  async getAllEvents(companyId: number): Promise<Event[]> {
    return this.events.filter((event) => event.companyId === companyId);
  }
  async delete(id: number): Promise<void> {
    const eventIndex = this.events.findIndex((event) => event.id === id);
    this.events = [
      ...this.events.slice(0, eventIndex - 1),
      ...this.events.slice(eventIndex + 1),
    ];
  }
}

export { InMemoryEventRepository };
