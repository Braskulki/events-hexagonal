import { AuthSession } from '@src/shared/auth.interface';
import { EventModel, EventSearchParams } from '../models/event.model';
import { IPaginationResponse } from '../models/base.model';


export interface IEventRepository {
  save(data: EventModel): Promise<EventModel>;
  findOne(data: Partial<EventModel>): Promise<EventModel | null>;
  searchPagination(params: EventSearchParams, session?: AuthSession): Promise<IPaginationResponse<EventModel>>;
  findById(id: string): Promise<EventModel | null>;
}
