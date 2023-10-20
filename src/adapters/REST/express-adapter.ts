import { HealthController } from './controllers/health-router';
import { createExpressServer } from 'routing-controllers';

export class Server {
  readonly port = process.env.PORT ?? 3000;
  constructor() {
    this.start();
  }

  start() {
    const app = createExpressServer({
      cors: {},
      controllers: [HealthController]
    });

    app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application running on port: ${this.port}`);
    });
  }
}
