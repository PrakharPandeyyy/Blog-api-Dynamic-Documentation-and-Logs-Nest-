import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { RefreshTokensProvider } from './refresh-tokens.provider';
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    private readonly refreshTokenProvider;
    constructor(usersService: UsersService, signInProvider: SignInProvider, refreshTokenProvider: RefreshTokensProvider);
    signIn(signInDto: SignInDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
