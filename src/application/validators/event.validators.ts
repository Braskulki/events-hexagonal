import { CreateEventModel } from '@src/domain/models/event.model';
import { z } from 'zod';

export function createEventValidation(data: CreateEventModel): void {
  const schema = z.object({
    name: z.string(),
    email: z.string(),
    administrators: z.array(z.string()).optional(),
    ticketLimit: z.number().optional(),
    ticketPrice: z.number().optional(),
    startDate: z.string(),
    endDate: z.string(),
    address: z.object({
      street: z.string(),
      number: z.string(),
      complement: z.string().optional(),
      neighborhood: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string()
    }).optional()
  });

  schema.parse(data);
}
