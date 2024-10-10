import { UserRepository } from '../repositories/userRepository';
import { IUserService } from '../interfaces/IUserService';
import { IUser } from '../models/user';
import { generateToken } from '../utils/JWT'; 
import bcrypt from 'bcryptjs';

export class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await this.userRepository.create(user);
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userRepository.findByEmail(email);
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }
    else { 
      const validPassword = await bcrypt.compare(password, user.password); 
      
      if (!validPassword) 
        throw new Error('Invalid  credentials');
    }
    let token = await generateToken(user._id); 
    return token;
  }
}
