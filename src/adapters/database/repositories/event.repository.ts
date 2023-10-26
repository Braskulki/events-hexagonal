import { Between, FindOptionsWhere, Repository } from 'typeorm';
import { singleton } from 'tsyringe';

import { EventModel } from '@src/domain/models/event.model';
import { IEventRepository } from '@src/domain/repositories/event-repository.interface';
import EventEntity from '../entities/event.entity';
import { DatabaseProvider } from '../typeorm-adapter';

@singleton()
export class EventRepository implements IEventRepository {
  private readonly repository: Repository<EventEntity>;

  constructor() {
    this.repository = DatabaseProvider.getRepository(EventEntity);
  }

  async save(data: EventModel): Promise<EventModel> {
    const event = await this.repository.save(data);

    return event as EventModel;
  }

  async findOne(data: Partial<EventModel>): Promise<EventModel | null> {
    const where: FindOptionsWhere<EventEntity> = {
      ...(data.id && { id: data.id }),
      ...(data.name && { name: data.name }),
      ...(data.createdBy && { createdBy: data.createdBy }),
      ...(data.ticketLimit && { ticketLimit: data.ticketLimit }),
      ...(data.ticketPrice && { ticketPrice: data.ticketPrice }),
      ...(data.startDate && data.endDate && {
        startDate: Between(new Date(data.startDate), new Date(data.endDate)),
        endDate: Between(new Date(data.startDate), new Date(data.endDate))
      }),
      ...(data.address && {
        address: {
          street: data.address.street,
          number: data.address.number,
          complement: data.address.complement,
          neighborhood: data.address.neighborhood,
          city: data.address.city,
          state: data.address.state,
          country: data.address.country
        }
      })
    };

    const event = await this.repository.findOne({ where });

    if (!event) return null;

    return event.entityToModel();
  }
}
