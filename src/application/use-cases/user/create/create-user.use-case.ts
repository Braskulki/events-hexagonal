import { CreateUserModel, UserModel } from '@src/domain/models/user.model';
import { ICreateUserUseCase } from './create-user.interface';
import { inject, singleton } from 'tsyringe';
import { IUserRepository } from '@src/domain/repositories/user-repository.interface';
import { IAddressRepository } from '@src/domain/repositories/address-repository.interface';
import { AddressModel } from '@src/domain/models/address.model';

@singleton()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: IUserRepository,
    @inject('AddressRepository') private readonly addressRepository: IAddressRepository
  ) {}

  async execute(data: CreateUserModel): Promise<UserModel> {
    const userExists = await this.userRepository.findOne({ email: data.email });

    if (userExists) throw new Error();

    const dataToSave: UserModel = {
      name: data.name,
      email: data.email
    };

    if (data.address) {
      const addressToSave: AddressModel = {
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement,
        neighborhood: data.address.neighborhood,
        city: data.address.city,
        state: data.address.state,
        country: data.address.country
      };

      const address = await this.addressRepository.save(addressToSave);
      dataToSave.idAddress = address.id;
    }


    return this.userRepository.save(dataToSave);
  }
}