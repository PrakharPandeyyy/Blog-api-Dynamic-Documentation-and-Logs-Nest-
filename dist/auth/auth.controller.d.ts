import { AuthService } from './providers/auth.service';
import { SignInDto } from './dtos/signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    SignIn(signInDto: SignInDto): Promise<boolean>;
}
