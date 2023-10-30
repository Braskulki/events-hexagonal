import BaseModel from './base.model';

export interface TicketModel extends BaseModel {
  idEvent: string;
  idUser: string;
  paymentType: number;
}

export interface CreateTicketModel {
  idEvent: string;
  paymentType: PaymentType;
}

export enum PaymentType {
  PIX = 1,
  BANK_SLP = 2,
  CREDIT_CARD = 3
}
