interface ICreateTicketDTO {
  name: string;
  price: number;
  quantity: number;
  event?: unknown;
  eventId: number;
}

export { ICreateTicketDTO };
