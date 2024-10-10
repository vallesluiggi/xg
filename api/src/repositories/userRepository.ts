import { User, IUser } from '../models/user';

export class UserRepository {
  async create(user: IUser): Promise<IUser> {
    return await User.create(user);
  }

  async findById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }

}
