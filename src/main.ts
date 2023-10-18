import './util/module-alias';
import 'dotenv/config';

import { Server } from '@src/adapters/REST/express-adapter';
import { DatabaseProvider } from './adapters/database/typeorm-adapter';

(async () => {
  await DatabaseProvider.initialize();

  new Server();
  // eslint-disable-next-line no-console
})().catch((err) => console.error(err));
