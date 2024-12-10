import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { GoogleUser } from '../interfaces/google-user.interface';

@Injectable()
export class CreateGoogleUserProviderTs {
  constructor(
    /**
     * Inject usersRepository
     */
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  public async createGoogleUser(googleUser: GoogleUser) {
    try {
      const user = await this.usersRepository.create(googleUser);
      return await this.usersRepository.save(user);
    } catch (e) {
      throw new ConflictException(e, {
        description: 'Could not create a new User',
      });
    }
  }
}