import KeycloakClient from '@src/adapters/authentication/keycloak/keycloak';
import { AddressRepository, EventRepository, UserRepository } from '@src/adapters/database/repositories';
import { CreateEventUseCase, UpdateEventUseCase } from '@src/application/use-cases/event';
import { CreateUserUseCase } from '@src/application/use-cases/user';
import { container } from 'tsyringe';

export function injectContainers(): void {
  container.registerSingleton('UserRepository', UserRepository);
  container.registerSingleton('AddressRepository', AddressRepository);
  container.registerSingleton('EventRepository', EventRepository);

  container.registerSingleton('CreateUserUseCase', CreateUserUseCase);

  container.registerSingleton('CreateEventUseCase', CreateEventUseCase);
  container.registerSingleton('UpdateEventUseCase', UpdateEventUseCase);

  container.registerSingleton('AuthenticationService', KeycloakClient);
}
