interface ITicketRepositoryCreate {
  name: string;
  price: number;
  quantity: number;
  event?: unknown;
  eventId: number;
}

export { ITicketRepositoryCreate };
