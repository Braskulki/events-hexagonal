import { HealthController, UserController } from './controllers';
import { createExpressServer } from 'routing-controllers';
import { ErrorHandler } from './middlewares/error-handler';
import { EventController } from './controllers/event-controller';

export class Server {
  readonly port = process.env.PORT ?? 3000;
  constructor() {
    this.start();
  }

  start() {
    const app = createExpressServer({
      cors: {},
      defaultErrorHandler: false,
      middlewares: [
        ErrorHandler
      ],
      controllers: [HealthController, UserController, EventController]
    });

    app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application running on port: ${this.port}`);
    });
  }
}
