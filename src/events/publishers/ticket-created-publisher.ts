import { Publisher, Subjects, TicketCreatedEvent } from '@xps179720/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
