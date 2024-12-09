import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // for circular dependency
    private readonly usersService: UsersService,
    /**
     * inject signInProvider
     */
    private readonly signInProvider: SignInProvider,
    
  ) {}
  async signIn(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }
}
