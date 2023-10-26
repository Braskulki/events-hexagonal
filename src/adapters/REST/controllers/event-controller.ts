import { CreateEventUseCase, ICreateEventUseCase } from '@src/application/use-cases/event';
import { createEventValidation } from '@src/application/validators/event.validators';
import { CreateEventModel, EventModel } from '@src/domain/models/event.model';
import { Body, JsonController, Post, Req, UseBefore } from 'routing-controllers';
import { container, inject, singleton } from 'tsyringe';
import authenticate from '../middlewares/authenticate';
import { Request } from 'express';


@singleton()
@JsonController('/event')
export class EventController {
  constructor(@inject('CreateEventUseCase') private readonly createEventUseCase: ICreateEventUseCase) {
    this.createEventUseCase = container.resolve<CreateEventUseCase>('CreateEventUseCase');
  }

  @Post('')
  @UseBefore(authenticate)
  async create(@Body() body: CreateEventModel, @Req() req: Request): Promise<EventModel> {
    createEventValidation(body);

    const event = await this.createEventUseCase.execute(body, req.session);

    return event;
  }

}
