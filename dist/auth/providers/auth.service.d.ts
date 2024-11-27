import { UsersService } from 'src/users/providers/users.servive';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    isAuth(): boolean;
}
