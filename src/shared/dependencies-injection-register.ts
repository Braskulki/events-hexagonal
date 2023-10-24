import { AddressRepository } from '@src/adapters/database/repositories/address.repository';
import { UserRepository } from '@src/adapters/database/repositories/user.repository';
import { CreateUserUseCase } from '@src/application/use-cases/user';
import { container } from 'tsyringe';

export function injectContainers(): void {
  container.registerSingleton('UserRepository', UserRepository);
  container.registerSingleton('AddressRepository', AddressRepository);
  container.registerSingleton('CreateUserUseCase', CreateUserUseCase);
}
