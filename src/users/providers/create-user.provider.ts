import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    /**
     * Inject hasingProvider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hasingProvider: HashingProvider,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment , try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    if (existingUser) {
      throw new BadRequestException('User Already Exists');
    }
    let newUser = this.userRepository.create({
      ...createUserDto,
      password: await this.hasingProvider.hashPassword(createUserDto.password),
    });
    try {
      newUser = await this.userRepository.save(newUser);
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment , try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    return newUser;
  }
}
