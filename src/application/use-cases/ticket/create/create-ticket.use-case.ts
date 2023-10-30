import { CreateTicketModel, TicketModel } from '@src/domain/models/ticket.model';
import { ICreateTicketUseCase } from './create-ticket.interface';
import { inject, singleton } from 'tsyringe';
import { ITicketRepository } from '@src/domain/repositories/ticket-repository.interface';
import { AuthSession } from '@src/shared/auth.interface';
import { IEventRepository } from '@src/domain/repositories/event-repository.interface';
import BusinessError from '@src/shared/errors/business-error';

@singleton()
export class CreateTicketUseCase implements ICreateTicketUseCase {
  constructor(
    @inject('TicketRepository') private readonly ticketRepository: ITicketRepository,
    @inject('EventRepository') private readonly eventRepository: IEventRepository
  ) {}

  async execute(data: CreateTicketModel, session: AuthSession): Promise<TicketModel> {
    const dataToSave: TicketModel = {
      paymentType: data.paymentType,
      idEvent: data.idEvent,
      idUser: session.idUser
    };

    const event = await this.eventRepository.findById(data.idEvent);

    if (event?.ticketLimit && (event.ticketLimit - (event?.ticketsBought ?? 0)) <= 0) {
      throw new BusinessError('Ticket limit reached');
    }

    return this.ticketRepository.save(dataToSave);
  }
}
