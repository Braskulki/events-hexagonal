import { CreateEventUseCase, ICreateEventUseCase, IUpdateEventUseCase, UpdateEventUseCase } from '@src/application/use-cases/event';
import { createEventValidation, updateEventValidation } from '@src/application/validators/event.validators';
import { CreateEventModel, EventModel } from '@src/domain/models/event.model';
import { Body, JsonController, Post, Put, Req, UseBefore, Param } from 'routing-controllers';
import { container, inject, singleton } from 'tsyringe';
import authenticate from '../middlewares/authenticate';
import { Request } from 'express';


@singleton()
@JsonController('/event')
export class EventController {
  constructor(
    @inject('CreateEventUseCase') private readonly createEventUseCase: ICreateEventUseCase,
    @inject('UpdateEventUseCase') private readonly updateEventUseCase: IUpdateEventUseCase
  ) {
    this.createEventUseCase = container.resolve<CreateEventUseCase>('CreateEventUseCase');
    this.updateEventUseCase = container.resolve<UpdateEventUseCase>('UpdateEventUseCase');
  }

  @Post('')
  @UseBefore(authenticate)
  async create(@Body() body: CreateEventModel, @Req() req: Request): Promise<EventModel> {
    createEventValidation(body);

    const event = await this.createEventUseCase.execute(body, req.session);

    return event;
  }

  @Put('/:id')
  @UseBefore(authenticate)
  async update(@Body() body: CreateEventModel, @Param('id') id: string, @Req() req: Request): Promise<EventModel> {
    updateEventValidation(body);

    const event = await this.updateEventUseCase.execute(id, body, req.session);

    return event;
  }

}
