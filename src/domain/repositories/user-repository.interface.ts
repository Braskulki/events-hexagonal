import { UserModel } from '../models/user.model';


export interface IUserRepository {
  save(data: UserModel): Promise<UserModel>;
  findOne(data: Partial<UserModel>): Promise<UserModel | null>;
}
