import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // for circular dependency
    private readonly usersService: UsersService,
    /**
     * inject signInProvider
     */
    private readonly signInProvider: SignInProvider,
    /**
     * inject refreshTokenProvider
     */
    private readonly refreshTokenProvider: RefreshTokensProvider,
  ) {}
  async signIn(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }
  async refreshTokens(refreshTokenDto: RefreshTokenDto) {
    return this.refreshTokenProvider.refreshTokens(refreshTokenDto);
  }
}
