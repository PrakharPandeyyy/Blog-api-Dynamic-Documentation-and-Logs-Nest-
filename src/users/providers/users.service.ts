import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUserParamDto } from '../dto/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from '../dto/create-user.dto';

/**
 * Class to connect to the database and perform CRUD operations on the Users table
 */

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(forwardRef(() => AuthService)) // for circular dependency
    private readonly authService: AuthService,
  ) {}

  /**
   *
   */
  async createUser(createUserDto: createUserDto) {
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
    let newUser = this.userRepository.create(createUserDto);
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

  /**
   * Method to find all users
   */
  // public findAll(
  //   getUserParamDto: GetUserParamDto,
  //   limit: number,
  //   page: number,
  // ) {}
  /**
   * Method to find a user by their id
   */
  async findOneById(id: number) {
    let user = undefined;
    try {
      user = await this.userRepository.findOneBy({ id });
    } catch (e) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment , try again later',
        {
          description: 'Error connecting to the database',
        },
      );
    }
    if (!user) {
      throw new BadRequestException('User Id Does not Exist');
    }
    return user;
  }
}
