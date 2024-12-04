import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
export declare class AuthService {
    private readonly usersService;
    private readonly signInProvider;
    constructor(usersService: UsersService, signInProvider: SignInProvider);
    signIn(signInDto: SignInDto): Promise<boolean>;
}
