import { CreateUserUseCase, ICreateUserUseCase } from '@src/application/use-cases/user';
import { createUserValidation } from '@src/application/validators/user.validators';
import { CreateUserModel, UserModel } from '@src/domain/models/user.model';
import { Body, JsonController, Post } from 'routing-controllers';
import { container, inject, singleton } from 'tsyringe';


@singleton()
@JsonController('/user')
export class UserController {
  constructor(@inject('CreateUserUseCase') private readonly createUserUseCase: ICreateUserUseCase) {
    this.createUserUseCase = container.resolve<CreateUserUseCase>('CreateUserUseCase');
  }

  @Post('')
  async create(@Body() body: CreateUserModel): Promise<UserModel> {
    createUserValidation(body);

    const user = await this.createUserUseCase.execute(body);

    return user;
  }

}
