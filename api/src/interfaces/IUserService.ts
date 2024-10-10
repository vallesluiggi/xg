import { IUser } from '../models/user';

export interface IUserService {
  createUser(user: IUser): Promise<IUser>;
  getUserById(id: string): Promise<IUser | null>; 
  findByEmail(email: string): Promise<IUser | null>;
}
