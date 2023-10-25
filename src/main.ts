import './shared/module-alias';
import 'dotenv/config';

import { Server } from '@src/adapters/REST/express-adapter';
import { DatabaseProvider } from './adapters/database/typeorm-adapter';
import { injectContainers } from './shared/dependencies-injection-register';
import KeycloakClient from './adapters/authentication/keycloak/keycloak';

(async () => {
  await DatabaseProvider.initialize();

  injectContainers();

  await KeycloakClient.start();

  new Server();
  // eslint-disable-next-line no-console
})().catch((err) => console.error(err));
