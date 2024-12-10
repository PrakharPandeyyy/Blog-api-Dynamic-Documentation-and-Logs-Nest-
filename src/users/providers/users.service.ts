import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';

import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { CreateGoogleUserProviderTs } from './create-google-user.provider.ts';
import { GoogleUser } from '../interfaces/google-user.interface';

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
    /**
     * Inject usersCreateManyProvider
     */
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    /**
     *Inject createUserProvide
     */
    private readonly createUserProvider: CreateUserProvider,
    /**
     *Inject findONeUserByEmailProvider
     */
    private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider,
    /**
     *Inject findOneByGoogleIdProvider
     */
    private readonly findOneByGoogleIdProvider: FindOneByGoogleIdProvider,
    /**
     *Inject createGoogleUserProvider
     */
    private readonly createGoogleUserProvider: CreateGoogleUserProviderTs,
  ) {}

  /**
   *
   */
  async createUser(createUserDto: CreateUserDto) {
    return this.createUserProvider.createUser(createUserDto);
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
  async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.creatMany(createManyUsersDto);
  }

  public async findOneByEmail(email: string) {
    return await this.findOneUserByEmailProvider.findOneByEmail(email);
  }

  public async findOneByGoogleId(googleId: string) {
    return await this.findOneByGoogleIdProvider.findOneByGoogleId(googleId);
  }

  public async createGoogleUser(googleUser: GoogleUser) {
    return await this.createGoogleUserProvider.createGoogleUser(googleUser);
  }
}
