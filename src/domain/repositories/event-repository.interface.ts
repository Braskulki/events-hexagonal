import { EventModel } from '../models/event.model';


export interface IEventRepository {
  save(data: EventModel): Promise<EventModel>;
  findOne(data: Partial<EventModel>): Promise<EventModel | null>;
}
