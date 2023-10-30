import KeycloakClient from '@src/adapters/authentication/keycloak/keycloak';
import { AddressRepository, EventRepository, UserRepository } from '@src/adapters/database/repositories';
import { TicketRepository } from '@src/adapters/database/repositories/ticket.repository';
import { CreateEventUseCase, ListEventUseCase, UpdateEventUseCase } from '@src/application/use-cases/event';
import { CreateTicketUseCase, ListTicketUseCase } from '@src/application/use-cases/ticket';
import { CreateUserUseCase, SelfDeleteUserUseCase, UpdateUserUseCase } from '@src/application/use-cases/user';
import { container } from 'tsyringe';

export function injectContainers(): void {
  container.registerSingleton('UserRepository', UserRepository);
  container.registerSingleton('AddressRepository', AddressRepository);
  container.registerSingleton('EventRepository', EventRepository);
  container.registerSingleton('TicketRepository', TicketRepository);

  container.registerSingleton('CreateUserUseCase', CreateUserUseCase);
  container.registerSingleton('UpdateUserUseCase', UpdateUserUseCase);
  container.registerSingleton('SelfDeleteUserUseCase', SelfDeleteUserUseCase);

  container.registerSingleton('CreateEventUseCase', CreateEventUseCase);
  container.registerSingleton('UpdateEventUseCase', UpdateEventUseCase);
  container.registerSingleton('ListEventUseCase', ListEventUseCase);

  container.registerSingleton('CreateTicketUseCase', CreateTicketUseCase);
  container.registerSingleton('ListTicketUseCase', ListTicketUseCase);

  container.registerSingleton('AuthenticationService', KeycloakClient);
}
