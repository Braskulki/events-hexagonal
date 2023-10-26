import { FindOptionsWhere } from 'typeorm';
import { AddressModel } from '../models/address.model';


export interface IAddressRepository {
  save(data: AddressModel): Promise<AddressModel>;
  findOne(data: FindOptionsWhere<AddressModel>): Promise<AddressModel | null>;
}
