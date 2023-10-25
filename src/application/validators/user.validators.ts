import { CreateUserModel } from '@src/domain/models/user.model';
import { z } from 'zod';

export function createUserValidation(data: CreateUserModel): void {
  const schema = z.object({
    name: z.string(),
    email: z.string(),
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
