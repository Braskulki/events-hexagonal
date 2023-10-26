# events-hexagonal

## About the project

- a simple MVP of an events application, where user can log into the application, search and create events, buy tickets for the events and set their preferences using tag's for filters

## Technologies

- Node with Typescript
- TypeORM
- Express
- PostgreSQL
- Kafka
- Docker
- Keycloak for authentication and session control

## Initial data diagram

![image](https://github.com/Braskulki/events-hexagonal/assets/47667269/0c94e084-19e6-4d8f-9304-abf2e0e9f34e)

## Roadmap task list

- [X] Initial project configuration
- [X] Create DB instance on elephantSQL
- [X] Configure Keycloak for application usage
- [ ] Users
  - [X] Create
  - [ ] Update
  - [ ] SelfDelete
- [ ] Events
  - [ ] Create
  - [ ] Update
  - [ ] Delete
- [ ] Tickets
  - [ ] Buy
  - [ ] Refound
  - [ ] List bought

## Keycloak configuration
- run script for initial user inside docker container
  - $HOME/keycloak/bin/add-user-keycloak.sh -u 'username' -p 'secpass' -r master
- configure new realm
  - clients -> service-backend
    - access type -> confidential
    - standard flow -> off
    - direct access and service account -> on
  - clients -> service-login
    - mappers
      - map properties that need to be on token
  - service account roles
    - realm-management
      - manage users

- add env variables to project


## TypeORM
- Create Migration
  - npx typeorm migration:create ./src/adapters/database/migrations/MigrationName