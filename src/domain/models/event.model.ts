import BaseModel from './base.model';

export interface EventModel extends BaseModel {
  name: string;
  idAddress?: string;
  administrators?: string[];
  ticketLimit?: number;
  ticketPrice?: number;
  startDate: string;
  endDate: string;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
  }
}

export interface CreateEventModel {
  name: string;
  idAddress?: string;
  administrators?: string[];
  ticketLimit?: number;
  ticketPrice?: number;
  startDate: string;
  endDate: string;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
  }
}
