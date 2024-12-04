import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    /**
     * Injecting usersRepository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  public async findOneByEmail(email: string) {
    let user: User | undefined = undefined;
    try {
      user = await this.usersRepository.findOneBy({
        email: email,
      });
    } catch (e) {
      throw new RequestTimeoutException(e, {
        description: 'Could not fetch the user',
      });
    }
    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }
    return user;
  }
}
