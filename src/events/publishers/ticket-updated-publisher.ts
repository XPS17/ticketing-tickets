import { Publisher, Subjects, TicketUpdatedEvent } from '@xps179720/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
